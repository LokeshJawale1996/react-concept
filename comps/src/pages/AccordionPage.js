import Accordion from "../components/Accordion"
function AccordionPage(){
  const items = [
    {
      id:1,
      label:"Can I use React on a Project?",
      content:"You can use React on any project you want.You can use React on any project you wantYou can use React on any project you want"

    },
    {
      id:2,
      label:"Can I use Javascript on a Project?",
      content:"You can use Javascript on any project you want.You can use Javascript on any project you wantYou can use Javascript on any project you want"
    },
    {
      id:3,
      label:"Can I use CSS on a Project?",
      content:"You can use CSS on any project you want.You can use CSS on any project you wantYou can use CSS on any project you want"
    }
  ];
return (
  <div>
    <Accordion items={items}/>
  </div>
)

}

export default AccordionPage;

