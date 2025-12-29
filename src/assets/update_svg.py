import base64

# Read the image and encode to base64
with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\ooo.png', 'rb') as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')

# Construct the SVG content
# Using the paths and gradients from the original OooIllustration.svg
# Replacing the image tag with a rect and pattern structure similar to Illustration.svg
# Matrix calculated to cover 862x438 with 954x463 image
# Scale X (A) = 1.0469 / 954 = 0.00109738
import base64

# Read the image and encode to base64
with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\ooo.png', 'rb') as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')

# Construct the SVG content
# Using the paths and gradients from the original OooIllustration.svg
# Replacing the image tag with a rect and pattern structure similar to Illustration.svg
# Matrix calculated to cover 862x438 with 954x463 image
# Scale X (A) = 1.0469 / 954 = 0.00109738
# Scale Y (D) = 1.0 / 463 = 0.00215983
# Translate X (E) = (1 - 1.0469) / 2 = -0.02345
# Translate Y (F) = 0

svg_content = f'''<svg width="918" height="692" viewBox="0 0 918 692" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M0 0H918V692H398.318C325.63 692 260.245 647.803 233.148 580.354L0 0Z" fill="url(#paint0_linear_ooo)"/>
  <path opacity="0.3" d="M430.952 335.74C430.952 335.74 407.748 343.443 387.463 317.55C367.177 291.657 375.874 259.815 340.997 261.897C306.119 263.978 261.643 270.587 258.183 232.633C254.722 194.678 223.887 158.019 180.808 183.354C137.729 208.689 57.6495 159.614 57.6495 159.614L28.2318 193.726L91.0318 248.353C91.0318 248.353 157.005 264.54 190.573 231.41C224.14 198.28 241.074 249.608 242.861 276.503C244.647 303.397 328.069 297.897 347.464 297.138C366.86 296.378 366.698 351.593 421.401 346.817L430.952 335.74Z" fill="url(#paint1_linear_ooo)"/>
  <rect x="56" y="210" width="862" height="438" fill="url(#pattern_ooo)"/>
  <defs>
    <pattern id="pattern_ooo" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image_ooo" transform="matrix(0.00025559 0 0 0.00024414 -0.02345 0)"/>
    </pattern>
    <linearGradient id="paint0_linear_ooo" x1="459" y1="-1.96889e-05" x2="983.294" y2="973.897" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF979A"/>
      <stop offset="1" stop-color="#CF6F72"/>
    </linearGradient>
    <linearGradient id="paint1_linear_ooo" x1="438.925" y1="313.099" x2="170.022" y2="444.185" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    <image id="image_ooo" width="4096" height="4096" xlink:href="data:image/png;base64,{b64_data}"/>
  </defs>
</svg>'''

with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\OooIllustration.svg', 'w') as f:
    f.write(svg_content)
