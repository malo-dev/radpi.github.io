import code from './../images/code.JPG';
import dignite from './../images/dignite.PNG';
import pinte from './../images/pinte.jpg';
import enfant from './../images/enfant.PNG'
import image1 from './../images/image1.jpg';
import image2 from './../images/image2.PNG'
import radpi from './../images/radpi.jpg'
import image3 from './../images/image3.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Page2 = () => {
    const firstfunction= ()=>{
            document.getElementById('first').style.display='inherit';
            document.getElementById('malo29').style.display='inherit';
            document.getElementById('pint').style.display='none';
            document.getElementById('titre12').style.display='inherit';
            document.getElementById('histoitetitle').style.display='none';
            document.getElementById('histoirediv').style.display='none'
            document.getElementById('travail123').style.display='none';
            document.getElementById('travail1').style.display='none';
            document.getElementById('howmakae').style.display='none'
            document.getElementById('howmakae1').style.display='none'
    }
    const firstfunction1= ()=>{
        document.getElementById('first').style.display='inherit';
        document.getElementById('malo29').style.display='inherit';
        document.getElementById('pint').style.display='none';
       
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail1').style.display='none';
}
    const secondfuntion1= () =>{
        document.getElementById('h1title').style.display='inherit';
        document.getElementById('malo30').style.display='flex';  
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='inherit';
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'
    }
    const secondfuntion2= () =>{
        document.getElementById('h1title1').style.display='inherit';
        document.getElementById('thirdp').style.display='flex';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='inherit';
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'

    }
    const secondfuntion3= () =>{
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        document.getElementById('l').style.display='inherit';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='inherit';
        document.getElementById('malo29').style.display='inherit';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='inherit';
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'
    }
    const firstfunctionne=()=>{
        document.getElementById('histoitetitle').style.display='inherit';
        document.getElementById('histoirediv').style.display='inherit'
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='none';
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail123').style.display='none';
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail1').style.display='none';
        document.getElementById('travail1').style.display='none';
        document.getElementById('howmakae').style.display='none'
        document.getElementById('howmakae1').style.display='none'
    }


    const firstfunctionnne=()=>{
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        document.getElementById('l').style.display='none';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='inherit';
        document.getElementById('titre12').style.display='none';
        document.getElementById('photo').style.display='none';
        document.getElementById('travail123').style.display='inherit';
        document.getElementById('travail1').style.display='inherit';
        alert('veuillez descendre pour voir le resultat');
    }




    const Howwemake=()=>{
        document.getElementById('histoitetitle').style.display='none';
        document.getElementById('histoirediv').style.display='none'
        document.getElementById('h1title1').style.display='none';
        document.getElementById('thirdp').style.display='none';
        document.getElementById('l').style.display='none';
        document.getElementById('h1title').style.display='none';
        document.getElementById('malo30').style.display='none';
        document.getElementById('first').style.display='none';
        document.getElementById('malo29').style.display='none';
        document.getElementById('pint').style.display='inherit';
        document.getElementById('titre12').style.display='none';
        document.getElementById('travail123').style.display='none';
        document.getElementById('travail1').style.display='none';
        document.getElementById('photo').style.display='none';
        document.getElementById('howmakae').style.display='inherit'
        document.getElementById('howmakae1').style.display='inherit'
        alert('veuillez descendre pour voir le resultat');
    }




    return ( 

            <div className="page1">
                    
            
                    <div className="page11">
                        <a className="page12" onClick={()=>{firstfunction()}} >?? Propos de nous</a>
                        <a   className="page13" onClick={()=>{firstfunctionne()}}>Notre Histoire</a>
                        <a  className="page13" onClick={()=>{Howwemake()}}>Comment Nous travaillons</a>
                        <a  className="page14" onClick={()=>{firstfunctionnne()}}>Travailler Pour Radpi</a>
                        <a  className="page15">Nous Contacter</a>
                
                    </div>
                    <img  className='pint' id='pint' src={pinte} alt="" />



                    <div className="histoire">
                    <h1 className="histoitetitle" id='histoitetitle'>Notre Histoire</h1>
                   <div className='histoirediv' id='histoirediv'> <p className="histoirepara">En effet, Le R??seau d???Action pour le D??veloppement <br />
                     et Progr??s Int??gr??s, (RADPI en sigle) est une organisation Ind??pendante, 
                    non confessionnelle, Neutre,<br />
                     apolitique et non gouvernementale de droit 
                    congolais cr????e 10 Mai 2006  et autoris?? de fonctionner <br />
                    sous N??JUST.GS.112/S-KV/3264/2009,  N?? Imp??t : A1600462W 
                    et N?? d???Enregistrement ONEM BUNIA :  <br />
                    09P/B/A/137. 
                    RADPI  est enregistr?? aux diff??rents minist??res nationaux 
                    et provinciaux du plan, <br /> Education, Action Humanitaires, 
                    environnement et d??veloppement durable.  
                    Il  est dot?? des statuts  <br />
                    l??galis??s et d???une personnalit?? juridique  
                     enregistr??e sous N?? Accus??  de R??ception n?? F.92/16.167  <br />
                     du minist??re 
                     National de la justice depuis 2016. <br />
                    </p>
                   
                    
                    </div>
        
                    </div>

                        <div className="howwemake" id=''>
                                <h1 id='howmakae'>Comment Nous Travaillons</h1>
                                <p className="howmakae" id='howmakae1'>
                                
                                       De part son exp??rience ant??rieure, RADPI a une exp??rience
                                       dans le domaine de passation des messages li??s au secteur 
                                       de Protection, Education, Sant??, Eau hygi??ne et Assainis
                                       sement, Rel??vement communautaire,??? et des r??ponses contre 
                                       toutes formes de violences et abus faites aux femmes et aux 
                                       enfants et jeunes d??s les ??valuations des besoins, la mise en ??uvre des
                                        activit??s, 
                                       le suivi ?? l?????valuation post r??alisation. Son approche et ses m??canismes
                                        permettent ??
                                        RADPI de mobiliser des partenariats avec des organisations 
                                        nationales
                                         qu???internationales en cons??ur comme BVES, Fondation Panzi, MERCY CORPS,
                                        PNUD,NRC,ACTED,WCH, RACOJ, ??? et des 
                                        institutions ??tatique dont la Division des affaires sociales, 
                                        Division de la jeunesse, INC-EPSP, Division de Genre famille et
                                         enfant. Au m??me moment, il est membre des groupes de travail pour
                                          la protection de l???enfant, du cluster ??ducation. Ces interactions 
                                          ont permis depuis longtemps
                                         le renforcement de capacit??s de son staff dans les secteurs d???interventions
                                
                                </p>
                        </div>


                    <div className="travail">
                            <h1 className="travail1" id='travail1'>
                            
                                Travailler Pour Radpi
                            </h1>
                        
                             <div className='travail123' id='travail123'>1. CONDUITE PERSONNELLE ET PROFESSIONNELLE <br /> <br />
                               ???	Je m???engage ?? ne pas abuser du pouvoir et l???influence que j???ai en vertu de ma<br />    <br />      position sur la vie et le bien-??tre du personnel, des b??n??ficiaires de nos activit??s et d???autres personnes ;
                               ???	Je serai patient, respectueux et courtois envers toutes
                                    les personnes avec qui je traite y compris les coll??gues, 
                                      les b??n??ficiaires, les dirigeants locaux et repr??sentant
                                     gouvernementaux, les repr??sentants des partenaires op??rationnels
                                     et d???ex??cution, les donateurs et d???autres coll??gues des ONGs  et de l???ONU. <br />
                                ???	Je m???habillerai d???une mani??re  appropri??e ??  la mission et au contexte culturel <br /> 
                            4. CONFLIT D???INTERET <br />
                                ???	Je remplirai mes fonctions officielles et g??rer mes affaires priv??es ??
                                    une mani??re qui ??vite le conflit d???int??r??t, en pr??servant et en renfor??ant 
                                  la confiance du public vis-??-vis de RADPI asbl. <br />
                                ???	Je m???engage ?? respecter le mandat, les Objectifs, les valeurs de RADPI asbl et
                                      s???assurer que les opinions personnelles, les comportements, y compris les conviction
                                     s politiques et /ou religieuses ne portent pas atteintes aux fonctions officielles
                                     aux activit??s effectu??es au nom de RADPI asbl. <br /> <br />
                            2. RESSOURCES FINANCIERES ET MATERIELLES <br />  <br /> <br />
                            ???	Je sauvegarderai et ferai un usage responsable de l???information
                             et des ressources auxquelles j???aurai acc??s en raison de mon engagement 
                             avec RADPI asbl <br />
                            ???	Je g??rerai les ressources  financi??re et mat??rielles de
                             RADPI asbl avec le plus grand soin, en pr??servant ceux- ci tout 
                             au moment contre le vol ou autres dommages, et les conserverait
                              correctement en sorte que l???utilisation non autoriser ou le mauvais
                               usage prive ne se produisent. <br />
                            ???	Je prot??gerai et utiliserai les ressources humaines,<br />
                             financi??res  et mat??rielles de RADPI asbl de fa??on efficace 
                             en gardant en esprit que ces ressources auraient ??t?? mise ?? la
                              disposition de RADPI asbl au profil des PDIs, Enfants, femmes et
                               autres cat??gorie des b??n??ficiaires relevant du mandant de  RADPI asbl. <br /> <br />
                            
                            
                            3. MEDIAS ET INFORMATION <br /> <br />
                            ???	Bien que RADPI asbl ait une attitude ouverte et positive 
                            en vers les m??dias, je m???abstiendrais de faire des commentaires
                             aux medias et aux journalistes au nom de RADPI asbl sans l???accord 
                             pr??alable du Coordinateur National  ou le chef de section de l???information
                              au si??ge social ; <br />
                            ???	Je m???engage ?? la fois tout en travaillent avec et /
                             ou pour et apr??s avoir quitt?? RADPI asbl de ne pas r??v??ler ??
                              des tiers des informations confidentielles que j???aurais obtenues 
                              en travaillant avec ou pour RADPI asbl ; <br /> <br />
                            4. SECURITE <br /> <br />
                            ???	Je prendrais en consid??ration de  la s??curit?? du personnel RADPI asbl 
                            dans les d??cisions op??rationnelles <br />
                            ???	Je ferai le suivi des instructions s??curitaires selon les r??gles 
                            et proc??dure de s??curit??s de RADPI asbl quand je suis dans la zone d???op??ration
                             (intervention) <br /><br />
                            5. INTERDICTION DE L???EXPLOITATION ET ABUS SEXUEL <br /> <br />
                            L???Exploitation et abus sexuelle est une infraction p??nale et un
                             comportement inacceptable pour le personnel RADPI asbl.
                            Les relations sexuelles entre les agents de RADPI RDC, les agents de RADPI
                             RDC et les b??n??ficiaires de l???aide, qui mettent en danger la cr??dibilit?? et
                              l???int??grit?? de l?????uvre de RADPI RDC sont strictement interdits.
                            ???	Je ne me livrerai ?? aucune activit?? sexuelle avec des personnes
                             (adultes ou enfants) qui b??n??ficient ou qui ont b??n??fici??s de la protection
                              de RADPI asbl ou de  son aide ;
                            ???	Je ne dois ni produire, ni acheter, ni distribuer ou utiliser 
                            les mat??riels pornographiques dans le Bureau  de RADPI asbl ou sur les
                             ??quipements de RADPI asbl.
                            
                    
                                </div>







                    </div>






                    <div className="aboutus">
                            <h1 className='titre12' id='titre12'>?? Propos de nous</h1>
                            <div className="first" >
                               <h3 id='first'>CODE DE  CONDUITE POUR LE PERSONNEL RADPI RDC.</h3>
                            
                                <div className="malo29" id='malo29'>
                                    <p className="firstp">RADPI RDC est r??put?? pour son <br />
                                            assistance humanitaire professionnelle et ses <br />
                                            normes ??thiques ??lev??es Ce code de conduite est <br />
                                            destin?? ?? servir de plateforme et d???engagement <br /> 
                                            formel en vue  d???amener le personnel RADPI <br />
                                            asbl et  ses membres du  personnel repr??sentant<br /> 
                                            et/ ou  accompagnant RADPI asbl  tant au bureau  <br />
                                            que dans  les missions sur le terrain, ?? ??tre  <br />
                                            responsable vis-??-vis des leurs actes et compor <br />
                                            tements. IL s???agit d???un code conduite pour le person <br />
                                            nel RADPI asbl, et s???applique au non-membre repr??sentant <br />
                                            et ou accompagnant RADPI asbl dans ses missions sur le <br />
                                             terrain tel que :Les Journaliers, Les Consultants ;Les  <br />
                                             enqu??teurs;Les Etudiants 
                                            <span className='namespacing' onClick={()=>{secondfuntion1()}}>...Savoir plus  <FontAwesomeIcon  icon={faAngleDown}/></span>
                                    </p>
                                    <img src={code} alt="" />
                                </div>

                            <h1 className='h1title' id='h1title'>RESPECT ET DIGNITE</h1>
                            <div className="mali30" id='malo30'>
                            <p className="secondp">
                            	Je respecterai toutes les personnes <br />
                                de mani??res ??gales et sans aucune  <br />
                                distinction ou discrimination fond??e sur  <br />
                                la nationalit??, la race, l???ethnie, la tribu, <br />
                                le sexe,les convictions religieuses, opinons  <br />
                                politique etc. <br />
                                Je me tiendrai inform?? du mandat de <br />
                                RADPI asbl, ses politiques, ses objectifs et ses <br />
                                activit??ssur le terrain o?? RADPI asbl intervient. <br />
                            	Je m???engage ?? respecter les lois locales, <br /> 
                                les us et coutumes de la culture locale. <br />
                                
                                <span className='namespacing' onClick={()=>{secondfuntion2()}}>...Savoir plus  <FontAwesomeIcon  icon={faAngleDown}/></span>
                            </p>
                            <img src={dignite} alt="" />

                            </div>
                            </div>

                          <h1 className='h1title1' id='h1title1'>VALEUR ET CONSIDERATION DES PDIs & ENFANTS </h1>  
                          <div className="thirdp" id='thirdp'>
                              <p> Il est important pour tous les employ??s et autres<br />
                                   personnes en contact avec les D??plac??s & Enfants <br />
                                  Veuillez ?? : ??tre conscient des situations qui peuvent <br />
                                  pr??senter des risques et de g??rer des situations; <br />
                          	      Planifier et organiser le travail et le lieu de travail  <br />
                                  de mani??re ?? minimiser les risques autant que possible,  
                                  ??tre <br /> disponible pour travailler avec des enfants;Veiller ?? ce  
                                  qu???une  <br/>culture de la transparence existe pour permettre ?? toutes <br />
                                  les questions ou des pr??occupations ?? ??tre pos??es et d??battues; <br />
                              	  Veiller ?? ce que le sentiment de responsabilit?? existe entre <br />
                                  personnel de fa??on ?? ce que des mauvaises pratiques ou les  <br />
                                  comportements potentiellement abusifs ne se laisse paspasser. <br />
                                  <span className='namespacing' onClick={()=>{secondfuntion3()}} >Retourner au debut <FontAwesomeIcon  icon={faAngleDown}/></span>
                            </p>
                            <img src={enfant} alt="" />
                          
                          </div>
                    </div>
                    <div className="trois">
                    <h1 id='l'>QUELQUES FIGURES DE RADPI</h1>
                    <div className="photo" id='photo'>
                        <img className='image1' src={image1} alt="" />
                        <img className='image2' src={image2} alt="" />
                        <img className='image3' src={image3} alt="" />
                    </div>
            </div>


            </div>

     );
}
 
export default Page2;