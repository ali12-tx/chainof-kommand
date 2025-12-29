import base64

# Read the image and encode to base64
with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\men.png', 'rb') as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')

# Path data from bloco_services.svg (line 5) - Main Wavy Shape
path_d = "M0.359039 0V726.4H611.992C611.992 726.4 581.101 716.63 565.334 659.879C549.567 603.128 528.759 617.629 494.084 610.062C459.409 602.495 455.617 558.987 460.658 515.479C465.699 471.971 489.358 398.668 449.629 379.279C409.9 359.89 386.729 383.062 376.8 398.669C366.871 414.276 338.967 408.979 329.272 420.849C319.577 432.719 318.158 462.986 286 474.572L268.5 473.626C268.5 473.626 297.339 464.565 298.918 442.886C300.497 421.207 288.826 403.87 310.268 397.886C331.71 391.902 352.209 394.1 358.199 363.2C364.189 332.3 364.186 320 388.466 312.759C412.746 305.518 451.837 277.129 460.666 230.471C463.9 213.351 462.266 194.841 459.635 176.019C455.104 143.519 447.623 110.094 457.204 81.341C472.331 35.942 515.839 0 515.839 0H0.359039Z"

# Top decoration path from bloco_services.svg (line 3)
top_path_d = "M608.172 0C608.172 0 491.282 52.6 498.376 150.484C505.47 248.368 417.882 297.189 417.882 297.189V0H608.172Z"

svg_content = f'''<svg width="719" height="727" viewBox="0 0 719 727" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="clip_wave">
      <path d="{path_d}"/>
    </clipPath>
    <linearGradient id="paint0_linear" x1="608.172" y1="148.594" x2="417.882" y2="148.594" gradientUnits="userSpaceOnUse">
      <stop stop-color="#402864"/>
      <stop offset="1" stop-color="#C39BFF"/>
    </linearGradient>
  </defs>
  
  <!-- Top Decoration -->
  <path opacity="0.2" d="{top_path_d}" fill="url(#paint0_linear)"/>

  <!-- Main Image Group clipped by wave -->
  <g clip-path="url(#clip_wave)">
    <!-- Image shifted right -->
    <image x="0" y="0" width="750" height="727" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,{b64_data}"/>
  </g>
</svg>'''

with open('d:\\BankBranchSide\\ShareRecipe-Web\\src\\assets\\men_wavy.svg', 'w') as f:
    f.write(svg_content)
