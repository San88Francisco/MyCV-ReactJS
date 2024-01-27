import InfoDetails from './LinkAndImgComponents'

const ContactAndPortfolio = ({ nameContact }) => {
   
   return (
     <div className="containerContact">
       <h3>{nameContact}</h3>
       <div className="infoDetailsContainerLeft">
         <InfoDetails linkMy="+48 576 385 840" messeger="Phone"></InfoDetails>
         <InfoDetails linkMy="https://www.instagram.com/verbytskiy_vv" messeger="Instagram"></InfoDetails>
         <InfoDetails linkMy="Poznan, Bronisza 6" messeger="Address"></InfoDetails>
       </div>
       <div className="infoDetailsContainerRight">
         <InfoDetails linkMy="VerbytskiyV@gmail.com" messeger="Email"></InfoDetails>
         <InfoDetails linkMy="https://www.linkedin.com/in/vasyl-verbytskiy-02645b290" messeger="Linkeding"></InfoDetails>
         <InfoDetails linkMy="https://github.com/San88Francisco" messeger="GitHub"></InfoDetails>
       </div>
     </div>
   );
 };

export default ContactAndPortfolio