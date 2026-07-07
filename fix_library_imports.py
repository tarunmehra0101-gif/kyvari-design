with open('src/components/Library.tsx', 'r') as f:
    content = f.read()

# find first occurance of "import" and the line containing "groupedLibrary ="
import re
new_content = re.sub(r'import React.*?const countryImages', r"import React, { useState } from 'react';\nimport { ChevronDown, MapPin } from 'lucide-react';\nimport { TrailCard } from './ui/trail-card';\n\nconst countryImages", content, flags=re.DOTALL)

with open('src/components/Library.tsx', 'w') as f:
    f.write(new_content)
