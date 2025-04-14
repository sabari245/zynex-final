// components/PrelineInitializer.tsx
'use client';

import { useEffect } from 'react';
// It's likely you'll need the IStaticMethods interface if using Preline's API directly
// import type { IStaticMethods } from 'preline/preline';
// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }
// Import the main Preline script
import 'preline/preline';


export default function PrelineInitializer() {
    useEffect(() => {
        // Optionally, you might need to re-initialize specific components
        // after navigation or dynamic content loading.
        // The import itself might be sufficient for initial load.
        // Example (if needed later):
        // setTimeout(() => { // Use setTimeout to ensure DOM elements are ready
        //   if (typeof window !== 'undefined' && window.HSStaticMethods) {
        //     window.HSStaticMethods.autoInit();
        //   }
        // }, 100); // Adjust delay if necessary

        // For auto-height textarea, you might need to explicitly init or reinit
        // after the component mounts or its value changes, if the attribute alone isn't enough.
        const textareas = document.querySelectorAll<HTMLTextAreaElement>('[data-hs-textarea-auto-height]');
        textareas.forEach(textarea => {
            // Basic auto-height logic (Preline might do more)
            textarea.style.height = 'auto'; // Reset height
            textarea.style.height = `${textarea.scrollHeight}px`;
            textarea.addEventListener('input', () => {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
            }, false);
        });


    }, []); // Run only once on mount

    return null; // This component doesn't render anything visually
}