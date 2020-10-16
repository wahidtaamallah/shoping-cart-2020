import arsenal from '../image/arsenal.jpg';
import arsenal1 from '../image/arsenal1.jpg';
import arsenal2 from '../image/arsenal2.jpg';
import barcelone from '../image/barcelone.jpeg';
import barcelone1 from '../image/barcelone1.jpg';
import barcelone2 from '../image/barcelone2.jpeg';
import realMadrid1 from '../image/real madrid1.jpg';
import realMadrid from '../image/real madrid.jpg';
import realMadrid2 from '../image/real madrid2.jpg';
import sevilla from '../image/sevilla.png';
import sevilla1 from '../image/sevilla1.png';
import sevilla2 from '../image/sevilla2.jpg';
import psg from '../image/psg.jpg';
import psg1 from '../image/psg1.jpg';
import psg2 from '../image/psg2.jpg';
import manCity from '../image/man city.jpg';
import manCity1 from '../image/man city1.jpg';
import manCity2 from '../image/man city2.jpg';
import chealse from '../image/chealse.jpg';
import chealse1 from '../image/chealse1.jpg';
import chealse2 from '../image/chealse2.jpg';
import liverpool from '../image/liverpool.jpg';
import liverpool1 from '../image/liverpool1.jpg';
import liverpool2 from '../image/liverpool2.jpg';
import manUnited from '../image/man united.jpg';
import manUnited1 from '../image/man united1.jpg';
import manUnited2 from '../image/man united2.jpg';
import atheticoMadrid from '../image/athetico madrid.jpg';
import atheticoMadrid1 from '../image/athetico madrid1.jpg';
import atheticoMadrid2 from '../image/athetico madrid2.jpg';



 const Tshirts = [
        {id:1, title: 'FC Arsenal', desc:" Ce t-shirt officiel du Arsenal FC a le blason du club entièrement imprimé sur le devant et est idéal pour tous les fans d'artilleurs. Ce t-shirt est fabriqué à partir de 100% coton et est un excellent cadeau de qualité supérieure.Couleur: Balnc. ", price: 60 , img: arsenal, quantity: 1},
        {id:2, title: 'FC Arsenal', desc:"Ce t-shirt officiel du Arsenal FC a le blason du club entièrement imprimé sur le devant et est idéal pour tous les fans d'artilleurs. Ce t-shirt est fabriqué à partir de 100% coton et est un excellent cadeau de qualité supérieure.Couleur: Jaune", price: 70, img: arsenal1, quantity: 1},
        {id:3, title: 'FC Arsenal', desc:"Ce t-shirt officiel du Arsenal FC a le blason du club entièrement imprimé sur le devant et est idéal pour tous les fans d'artilleurs. Ce t-shirt est fabriqué à partir de 100% coton et est un excellent cadeau de qualité supérieure.Couleur: Rouge et Blanc", price: 90, img: arsenal2, quantity: 1},
        {id:4, title: 'FC Barcelone', desc:" T-shirt à manches courtes orné de l’inscription Barça et du logo Nike. Col rond. En éliminant la transpiration de la peau qui s’évapore plus rapidement, le tissu Nike Dry garantit fraîcheur, confort et concentration pour un bon entraînement. Technologie Dri-FIT de Nike. Couleur: Noir.", price: 100 , img: barcelone, quantity: 1},
        {id:5, title: 'FC Barcelone', desc:"T-shirt à manches courtes orné de l’inscription Barça et du logo Nike. Col rond. En éliminant la transpiration de la peau qui s’évapore plus rapidement, le tissu Nike Dry garantit fraîcheur, confort et concentration pour un bon entraînement. Technologie Dri-FIT de Nike. Couleur: Jaune.", price: 79, img: barcelone1, quantity: 1},
        {id:6, title: 'FC Barcelone', desc:"T-shirt à manches courtes orné de l’inscription Barça et du logo Nike. Col rond. En éliminant la transpiration de la peau qui s’évapore plus rapidement, le tissu Nike Dry garantit fraîcheur, confort et concentration pour un bon entraînement. Technologie Dri-FIT de Nike. Couleur: Rouge et Bleu", price: 90, img: barcelone2, quantity: 1},
        {id:7, title: 'FC Real Madrid', desc:" Maintenant, vous pouvez montrer la fierté de votre équipe avec ce t-shirt à écusson de l'équipe du Real Madrid par adidas. Cela mettra en vedette l'écusson de l'équipe au centre de la poitrine, ainsi que le tissu à double mélange qui ne manquera pas de vous garder à l'aise avec sa sensation de performance.Couleur:turquoise", price: 60, img: realMadrid1, quantity: 1},
        {id:8, title: 'FC Real Madrid', desc:" Maintenant, vous pouvez montrer la fierté de votre équipe avec ce t-shirt à écusson de l'équipe du Real Madrid par adidas. Cela mettra en vedette l'écusson de l'équipe au centre de la poitrine, ainsi que le tissu à double mélange qui ne manquera pas de vous garder à l'aise avec sa sensation de performance.Couleur:Rose", price: 80, img: realMadrid , quantity: 1},
        {id:9, title: 'FC Real Madrid', desc:" Maintenant, vous pouvez montrer la fierté de votre équipe avec ce t-shirt à écusson de l'équipe du Real Madrid par adidas. Cela mettra en vedette l'écusson de l'équipe au centre de la poitrine, ainsi que le tissu à double mélange qui ne manquera pas de vous garder à l'aise avec sa sensation de performance.Couleur:Blanc ", price: 90, img:realMadrid2 , quantity: 1},      
        {id:10, title: 'FC Sevilla', desc:"tissu anti-humedad élimine l'humidité du corps Séchage rapide.Couleur:Bleu ", price: 90 , img: sevilla, quantity: 1},
        {id:11, title: 'FC Sevilla', desc:"tissu anti-humedad élimine l'humidité du corps Séchage rapide.Couleur:Blanc", price: 80, img: sevilla1, quantity: 1},
        {id:12, title: 'FC Sevilla', desc:"tissu anti-humedad élimine l'humidité du corps Séchage rapide.Couleur:Rouge et Blanc", price: 75, img: sevilla2 , quantity: 1},
        {id:13, title: 'FC Paris-Saint-Gearmain', desc:"Maillot Paris Saint-Germain Nike Domicile Stadium 2020/2021", price: 90, img: psg, quantity: 1},
        {id:14, title: 'FC Paris-Saint-Gearmain', desc:"Maillot Paris Saint-Germain Nike Domicile Stadium 2020/2021", price: 80, img: psg1, quantity: 1},
        {id:15, title: 'FC Paris-Saint-Gearmain', desc:"Maillot Paris Saint-Germain Nike Domicile Stadium 2020/2021", price: 80, img: psg2, quantity: 1},
        {id:16, title: 'FC Man City', desc:"Portez votre fierté City avec style, sur le terrain et en dehors, avec le maillot Manchester City Home 2020-21. Avec le même design et les mêmes couleurs City que vous connaissez et aimez, c'est l'édition parfaite mise à jour de votre garde-robe pour la saison 2020. C'est idéal que vous soyez sur le terrain ou que vous souhaitiez simplement montrer votre fierté en tant que véritable Cityzen.", price: 80, img: manCity , quantity: 1},
        {id:17, title: 'FC Man City', desc:"Portez votre fierté City avec style, sur le terrain et en dehors, avec le maillot Manchester City Home 2020-21. Avec le même design et les mêmes couleurs City que vous connaissez et aimez, c'est l'édition parfaite mise à jour de votre garde-robe pour la saison 2020. C'est idéal que vous soyez sur le terrain ou que vous souhaitiez simplement montrer votre fierté en tant que véritable Cityzen.", price: 80, img: manCity1, quantity: 1},
        {id:18, title: 'FC Man City', desc:"Portez votre fierté City avec style, sur le terrain et en dehors, avec le maillot Manchester City Home 2020-21. Avec le même design et les mêmes couleurs City que vous connaissez et aimez, c'est l'édition parfaite mise à jour de votre garde-robe pour la saison 2020. C'est idéal que vous soyez sur le terrain ou que vous souhaitiez simplement montrer votre fierté en tant que véritable Cityzen.", price: 80, img: manCity2, quantity: 1},
        {id:19, title: 'FC Man United', desc:"Adoptez la tenue de vos joueurs préférés. Ce maillot à manches courtes, que l'équipe principale porte les jours de match, est le moyen parfait d'afficher votre fierté et votre passion.", price: 80, img: manUnited , quantity: 1},
        {id:20, title: 'FC Man United', desc:"Adoptez la tenue de vos joueurs préférés. Ce maillot à manches courtes, que l'équipe principale porte les jours de match, est le moyen parfait d'afficher votre fierté et votre passion.Couleur;Noir", price: 80, img: manUnited1, quantity: 1},
        {id:21, title: 'FC Man United', desc:"Adoptez la tenue de vos joueurs préférés. Ce maillot à manches courtes, que l'équipe principale porte les jours de match, est le moyen parfait d'afficher votre fierté et votre passion.Couleur:Rouge", price: 80, img: manUnited2, quantity: 1},
        {id:22, title: 'FC Chealse', desc:"Il s'agit du maillot officiel Nike pour la saison 2019-2020, utilisé par le Chelsea FC. C'est un produit Nike officiel, nouveau avec des étiquettes. Tous nos maillots Nike sont officiels / authentiques", price: 80, img: chealse , quantity: 1},
        {id:23, title: 'FC Chealse', desc:"Il s'agit du maillot officiel Nike pour la saison 2019-2020, utilisé par le Chelsea FC. C'est un produit Nike officiel, nouveau avec des étiquettes. Tous nos maillots Nike sont officiels / authentiques", price: 80, img: chealse1 , quantity: 1},
        {id:24, title: 'FC Chealse', desc:"Il s'agit du maillot officiel Nike pour la saison 2019-2020, utilisé par le Chelsea FC. C'est un produit Nike officiel, nouveau avec des étiquettes. Tous nos maillots Nike sont officiels / authentiques", price: 80, img: chealse2, quantity: 1},
        {id:25, title: 'FC Liverpool', desc:"T-shirt en polyester LFC officiel pour homme. Couleur:Rouge", price: 80, img: liverpool , quantity: 1},
        {id:26, title: 'FC Liverpool', desc:"T-shirt en polyester LFC officiel pour homme. Couleur:Noir ", price: 80, img: liverpool1 , quantity: 1},
        {id:27, title: 'FC Liverpool', desc:"T-shirt en polyester LFC officiel pour homme.Couleur: Bleu ", price: 80, img: liverpool2 , quantity: 1},
        {id:28, title: 'FC Athetico Madrid', desc:"Maillot uniforme qui accompagnera les joueurs tout au long de la saison 2018/19. fabriqué avec la technologie dri-fit qui garde la peau fraîche et sèche tout au long de la performance", price: 80, img: atheticoMadrid, quantity: 1},
        {id:29, title: 'FC Athetico Madrid', desc:"Maillot uniforme qui accompagnera les joueurs tout au long de la saison 2018/19. fabriqué avec la technologie dri-fit qui garde la peau fraîche et sèche tout au long de la performance", price: 80, img: atheticoMadrid1, quantity: 1},
        {id:30, title: 'FC Athetico Madrid', desc:"Maillot uniforme qui accompagnera les joueurs tout au long de la saison 2018/19. fabriqué avec la technologie dri-fit qui garde la peau fraîche et sèche tout au long de la performance ", price: 80, img: atheticoMadrid2, quantity: 1},
       

]

export default Tshirts;