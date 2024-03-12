import React, { useState } from "react";

export default function SideBar() {
  const [openSection, setOpenSection] = useState(null);

  const onSelection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    { title: "Section 1", items: ["Item 1.1", "Item 1.2", "Item 1.3"] },
    { title: "Section 2", items: [] },
    { title: "Section 3", items: ["Item 3.1", "Item 3.2", "Item 3.3"] },
  ];

   

  return (
    <div style={{ background: "gray" }}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="">
          {section.items.length <= 1 ? (
            <div onClick={() => onSelection(sectionIndex)}>{section.title}</div>
          ) : (
            <div>
              <div className="" onClick={() => onSelection(sectionIndex)}>
                {section.title}
              </div>
              {sectionIndex === openSection && (
                <div>
                  {section.items.map((item, index) => (
                    <div key={index} className="">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
