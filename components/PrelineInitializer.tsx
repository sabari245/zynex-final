// components/PrelineInitializer.tsx
'use client';

import { useEffect } from 'react';
// You might need these types later if interacting directly with Preline's API
// import type { IStaticMethods } from 'preline/preline';
// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

// DO NOT import 'preline/preline' here at the top level

export default function PrelineInitializer() {
    useEffect(() => {
        // Dynamically import Preline here, ensuring it only runs client-side
        import('preline/preline').then(() => {
            // Optional: If autoInit on import isn't sufficient after navigation/updates
            // you might need to manually trigger re-initialization.
            // setTimeout(() => {
            //   if (typeof window !== 'undefined' && window.HSStaticMethods) {
            //      window.HSStaticMethods.autoInit();
            //      console.log("Preline autoInit called");
            //   }
            // }, 100); // Delay might be needed

            // --- Keep the Textarea Auto-Height Logic ---
            // This might still be necessary if the plugin doesn't handle
            // dynamic React updates perfectly.
            const textareas = document.querySelectorAll<HTMLTextAreaElement>(
                '[data-hs-textarea-auto-height]'
            );
            textareas.forEach((textarea) => {
                // Initial adjustment
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;

                // Listener for input changes
                const handleInput = () => {
                    textarea.style.height = 'auto';
                    textarea.style.height = `${textarea.scrollHeight}px`;
                };

                // Add listener only once
                if (!(textarea as any).__hasAutoHeightListener) {
                    textarea.addEventListener('input', handleInput, false);
                    (textarea as any).__hasAutoHeightListener = true; // Mark as listener added
                }

                // Optional: Clean up listener on component unmount if needed,
                // though for a root initializer it might not be critical.
                // return () => {
                //   textarea.removeEventListener('input', handleInput, false);
                //   delete (textarea as any).__hasAutoHeightListener;
                // };
            });
            // --- End Textarea Logic ---
        });
    }, []); // Run only once on mount

    return null; // This component doesn't render anything visually
}