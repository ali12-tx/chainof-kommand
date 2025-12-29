import base64

# Read the image and encode to base64
with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\hands.png', 'rb') as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')

# Read Contact.svg to get the background and structure
with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\Contact.svg', 'r') as f:
    contact_svg = f.read()

# Extract defs
start_defs = contact_svg.find('<defs>')
end_defs = contact_svg.find('</defs>') + 7
defs_content = contact_svg[start_defs:end_defs]

# SVG Header
svg_header = '<svg width="572" height="567" viewBox="0 0 572 567" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'

# Background paths from Contact.svg (pink gradient background)
background_paths = '''
<g clip-path="url(#clip0_1810_2336)">
<path d="M46.1862 0V298.368C46.1862 327.241 62.6428 354.352 90.4088 371.222L184.296 428.264H572V0H46.1862Z" fill="url(#paint3_linear_1810_2336)"/>
<path d="M410.8 566.102H572V428.263H183.402L410.8 566.102Z" fill="url(#paint4_linear_1810_2336)"/>
'''

# Add filters to defs for processing the image
# 1. Remove black background by making dark colors transparent
# 2. Make the remaining (hands) darker
filter_def = '''
<filter id="remove-black" x="0" y="0" width="100%" height="100%">
  <feColorMatrix type="matrix" values="0.6 0 0 0 0
                                       0 0.6 0 0 0
                                       0 0 0.6 0 0
                                       1 1 1 0 0" />
</filter>
'''
defs_content = defs_content.replace('</defs>', filter_def + '</defs>')

# Place the hands image with filter applied
# hands.png is 433x562, centering it horizontally: (572-433)/2 = 69.5
image_tag = f'''
<image x="70" y="5" width="433" height="562" xlink:href="data:image/png;base64,{b64_data}" filter="url(#remove-black)" style="mix-blend-mode: multiply;"/>
'''

closing_tags = '</g>\n' + defs_content + '\n</svg>'

final_svg = svg_header + background_paths + image_tag + closing_tags

with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\hands_styled.svg', 'w') as f:
    f.write(final_svg)

print("hands_styled.svg created successfully!")
