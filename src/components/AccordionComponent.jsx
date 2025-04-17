"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

// export default function AccordionComponent() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <Accordion type="single" collapsible>
//       <AccordionItem value="item-1">
//         <AccordionTrigger
//           className="flex items-center justify-between"
//           data-state={isOpen ? "open" : "closed"} // Dynamically set data-state
//           onClick={handleToggle}
//         >
//           <span>Is it accessible?</span>
//           <svg
//             className={`h-5 w-5 text-gray-800 dark:text-gray-200 transition-transform duration-300 transform ${
//               isOpen ? "rotate-180" : ""
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//           {isOpen}
//         </AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger
//           className="flex items-center justify-between"
//           data-state={isOpen ? "open" : "closed"} // Dynamically set data-state
//           onClick={handleToggle}
//         >
//           <span>Is it accessible?</span>
//           <svg
//             className={`h-5 w-5 text-gray-800 dark:text-gray-200 transition-transform duration-300 transform ${
//               isOpen ? "rotate-180" : ""
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//           {isOpen}
//         </AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// }


export default function AccordionComponent() {
  const [openItem, setOpenItem] = useState(null); // Tracks the currently opened item

  const handleToggle = (itemValue) => {
    if (openItem !== itemValue) {
      setOpenItem(itemValue); // Open the clicked item
    }
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          className="flex items-center justify-between"
          onClick={() => handleToggle('item-1')}
          data-state={openItem === 'item-1' ? 'open' : 'closed'}
        >
          <span>Item 1</span>
          <svg
            className={`h-5 w-5 transition-transform ${
              openItem === 'item-1' ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </AccordionTrigger>
        <AccordionContent>
          This is the content for Item 1.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger
          className="flex items-center justify-between"
          onClick={() => handleToggle('item-2')}
          data-state={openItem === 'item-2' ? 'open' : 'closed'}
        >
          <span>Item 2</span>
          <svg
            className={`h-5 w-5 transition-transform ${
              openItem === 'item-2' ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </AccordionTrigger>
        <AccordionContent>
          This is the content for Item 2.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger
          className="flex items-center justify-between"
          onClick={() => handleToggle('item-3')}
          data-state={openItem === 'item-3' ? 'open' : 'closed'}
        >
          <span>Item 3</span>
          <svg
            className={`h-5 w-5 transition-transform ${
              openItem === 'item-3' ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </AccordionTrigger>
        <AccordionContent>
          This is the content for Item 3.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}