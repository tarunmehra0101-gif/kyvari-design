import os
import re

components_dir = 'src/components'

for filename in os.listdir(components_dir):
    if not filename.endswith('.tsx'):
        continue
    filepath = os.path.join(components_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
        
    original = content
    
    if "use client" not in content:
        content = "'use client';\n" + content

    if "setView" in content and filename != "Sidebar.tsx":
        content = content.replace("({ setView }: { setView: (v: string) => void })", "()")
        content = content.replace("({ setView, openPlace }: { setView: (v: string) => void, openPlace: (p: any) => void })", "({ openPlace }: { openPlace: (p: any) => void })")
        
        if "useRouter" not in content:
            content = re.sub(r"(import React.*?from 'react';)", r"\1\nimport { useRouter } from 'next/navigation';", content)
        
        # Inject router initialization inside the component
        # Find export function Name(...) {
        match = re.search(r'export function (\w+)\((.*?)\) {', content)
        if match:
            func_def = match.group(0)
            if "const router = useRouter();" not in content:
                content = content.replace(func_def, func_def + "\n  const router = useRouter();")
                
        # Replace setView('route') with router.push('/route')
        content = re.sub(r"setView\('([^']+)'\)", lambda m: f"router.push('/{m.group(1)}')" if m.group(1) != 'home' else "router.push('/')", content)

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filename}")
