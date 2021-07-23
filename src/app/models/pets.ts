import { Deserializable } from "./deserializable";

export class Pet implements Deserializable {
  id: string;
  name: string;
  category: string;
  description_1: string;
  description_2: string;
  image: string;
  price: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export const PETS: Pet[] = [

    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg',
    //     category: '', price: 300,
    //     description_1: ``,
    //     description_2: ''
    // } as Pet,

    // {
    //     id: 'directories-waste-paper', name: 'Directories Waste Paper', image: 'assets/images/products/waste-papers/directories.jpeg',
    //     category: 'waste-papers', price: 0,
    //     description_1: `<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>
    //     <p>Specifications:</p>
    //     <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>
    //     <p>&nbsp;</p>`,
    //     description_2: ''
    // } as Pet,

    {
        id: 'magazine-waste-paper', name: 'Magazine Waste Paper', image: 'assets/images/products/waste-papers/waste-magazine.jpg',
        category: 'waste-papers', price: 0,
        description_1: `<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>
        <p>Specifications:</p>
        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>
        <p>&nbsp;</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'occ-waste-paper', name: 'OCC Waste Paper', image: 'assets/images/products/waste-papers/occ-waste.jpg',
        category: 'waste-papers', price: 0,
        description_1: `<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>
        <p>Specifications:</p>
        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>
        <p>&nbsp;</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'onp-waste-paper', name: 'ONP Waste Paper', image: 'assets/images/products/waste-papers/onp-waste.jpg',
        category: 'waste-papers', price: 0,
        description_1: `<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>
        <p>Specifications:</p>
        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>
        <p>&nbsp;</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'oinp-waste-paper', name: 'OINP Waste Paper', image: 'assets/images/products/waste-papers/oinp-waste.jpg',
        category: 'waste-papers', price: 0,
        description_1: `<p>We are exporters of Copy Papers and waste paper and the paper scraps offered by us are completely environment friendly and majorly used in recyclable industries. We supply OCC waste paper, 100% cardboard, in Bales Post-industrial collected from private companies.</p>
        <p>Specifications:</p>
        <p>Bales &amp; Scrap paper with high quality<br />1. Product Type: Waste Paper<br />2. Type: OCC, ONP, OMG, YELLOW PAGES, A3, A4 WASTE PAPER<br />3. Packing: BALE (1.2-1.4 TONS/ BALE)<br />4. Feature: Mixed &amp; NOT MIXED<br />5. Quantity: 1000 Tons per Month</p>
        <p>&nbsp;</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'tissue-paper', name: 'Tissue Paper', image: 'assets/images/products/tissue-papers/tissue.jpeg',
        category: 'waste-papers', price: 300,
        description_1: `<p>Our Tissue Paper is a very specialized product manufactured from 100% recycled waste paper. The standard brightness of our Recycled Tissue Paper is maintained at 80% ISO. It is mainly used for Napkin, Fancy wrapping &amp; packing, and Deep Coloring for Decorative papers. We stand in the midst of distinguished tissue paper manufacturers and suppliers based in the Netherlands.</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'board-colored-paper', name: 'Board Colored Paper', image: 'assets/images/products/board-papers/board-1.jpg',
        category: 'paper-type', price: 300,
        description_1: `<p>Dmv Export Sales offers art paper, art cards, and artboard from the best mills in Thailand. DG Wholesale Paperline rapidly becoming a major exporter of art paper grades. The quality is widely accepted worldwide, and PMDS art paper and board grades are beginning to be exported in large quantities to markets such as the USA and Europe. PMDS only makes good quality art paper above 80GSM. Very good quality starts above 100GSM and goes up to about 300GSM. Pattaya offers a matte and gloss finish and does not offer silk. This paper is typically exported in sheets.</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'duplex-board-paper', name: 'Duplex Board Paper', image: 'assets/images/products/board-papers/dumplex-board.jpg',
        category: 'waste-papers', price: 300,
        description_1: `<p>ABOUT OUR DUPLEX BOARDS<br />Dmv Export Sales presents a wide range of boards to the packaging industry viz; single and double coated Boards with Grey-Back, white-Back and kraft-Back options, offered in 230 to 600 GSM. The WCPM product range also includes value-added products like Cup Stock Board for paper cups and Folding Box boards for the high-end packaging segment.<br />Among the uncoated range, we offer Grey-Back and kraft-Back boards to the Garment and Footwear industry.</p>
        <p>The feature-packed multi-layer boards are made of state of Art technology using virgin fibers in top layers and recycled fibers in the middle that ensure good bulk, extra strength, and stiffness to the boards to suit the needs of the packaging industry. The Duplex range possesses excellent box-making properties.</p>
        <p>The products are used in a wide range of application segments viz; Pharmaceutical, Apparel, Match Box, Cigarette, Liquid Packaging, Food Packaging, and various other packaging applications.</p>
        <p>SPECIFICATION<br />&ndash; A grade Quality, 200GSM-500GSM<br />&ndash; Packing: 100sheets wrapped with strong PE coated kraft paper, film wrapped, packed on wooden Pallets. (with angle protector)<br />&ndash; Month capacity: 50,000tons<br />&ndash; Delivery time: within 10 days after getting down payment</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'thermal-paper-rolls', name: 'Thermal Paper', image: 'assets/images/products/Thermal-Paper-Rolls.jpg',
        category: 'paper-type', price: 300,
        description_1: `<p>We provide an ample range of Thermal Printer Paper for Fax Roll, Food Labels, Airline Tickets, Tags, Dispatch Labels, Bar code labels, and many other carbonless applications. We have carved a niche as the most preeminent Thermal Paper Rolls Manufacturer and Thermal Paper Supplier in the Netherlands. Our Thermal Printer Paper exhibits countless features and has a number of commercial uses. Manufactured from premium quality base materials, our Thermal Printer Paper is the perfect blend of efficiency and performance.</p>
        <p>APPLICATION AREAS<br />&ndash; Eye testing<br />&ndash; ATM machines<br />&ndash; Count testing machines<br />&ndash; Blood testing</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'kraft-paper', name: 'Kraft Paper', image: 'assets/images/products/kraft-paper.jpg',
        category: 'paper-type', price: 300,
        description_1: `<p>We are involved in providing an extensive range of packaging products like Kraft Papers. These papers are produced from wood pulp using a kraft pulping process that converts wood into wood pulp comprising of thick cellulose fibers. The paper made through the kraft technique is available in both sheets and roll forms. The main application of the Kraft Papers is in industrial packaging. The kraft paper bags, boxes, and wrappers are widely used for packaging light to medium-duty products. The kraft paper bags are offered in different sizes and dimensions as per the specific needs of the packaging industry. Many kraft paper bags and covers contain attractive printed designs, which fulfill the need of various sectors like interior decoration, gift, event promotion, textiles companies, and many more. Hotels and restaurant owners supply certain food products in Kraft Paper packaging materials. Besides its use in the packaging industry, Kraft Papers are also used in designing pamphlets, banners, and posters for specific brand promotions.</p>
        <p>In this fiercely competitive market, business organizations use different advertising techniques for the promotion of their products and services. Banners and logos creation is one of the popular advertising techniques. Kraft Papers are highly resistant to dust particles and are known for their high load-carrying strength. Therefore, these papers are preferred by the advertising companies for making attractive banners and printed logos.</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'color-copy-paper', name: 'Color Copy Paper', image: 'assets/images/products/color-paper.webp',
        category: 'waste-papers', price: 300,
        description_1: `<p>Copy paper or Color copy paper is available in rolls or sheets and a wide range of basic sizes and weights, giving you the flexibility you need for any application.</p>
        <p>Specification<br />Main colors: Light milk white<br />Stock Size: A2, A3, A4, A5 Or according to your requirement<br />Weight : 70g, 80g, 120g, 160g<br />Surface: Smooth<br />Packaging: In sheets or in rolls<br />Machine deckle : 1200mm, 1575mm, 1760mm, 1880mm, 2400mm<br />Popular Use: Stationery, Copy paper, printing paper, notebook, diary, presentation folder, invitations, etc.</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'copy-laser-paper', name: 'Copy Laser Paper', image: 'assets/images/products/laser-paper.jpg',
        category: 'copy-paper', price: 300,
        description_1: `<p>Detail of COPY LASER PAPER A4 80GSM / 75GSM / 70GSM<br />&ndash; Sheet Size:210mm x 297mm/297mm x 420mm International Paper Standards Size(ISO) A4/A3<br />&ndash; Quality: Imported 100% Virgin Wood Pulp<br />&ndash; Whiteness: 102-104%, Natural White<br />&ndash; Grading: A<br />&ndash; Thickness: 106cm<br />&ndash; Capability: High-Speed Copying 100ppm, Laser Capable, Inkjet Capable, Fax Capable.<br />EXCELLENT PERFORMANCE DUE TO THE FOLLOWING CHARACTERISTICS<br />&ndash; Moisture Control &ndash; Makes the sheets stay flat in the copier and enhances tunability.<br />&ndash; Low Dust Content &ndash; Minimizing Your copier running cost.<br />&ndash; Good Opacity &ndash; Double-sided copying of the best quality<br />&ndash; Smoothness &ndash; Improving Printing Quality.<br />&ndash; Bulky Sheet &ndash; Enhancing the smooth run ability<br />BEST FOR USE WITH YOUR<br />&ndash; Photocopier<br />&ndash; Laser Printer<br />&ndash; Fax Machine<br />&ndash; Ink-jet<br />&ndash; Copier<br />&ndash; 2 side copying</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'double-a-a4', name: 'Double A A4 Paper', image: 'assets/images/products/double-a.jpg',
        category: 'copy-paper', price: 300,
        description_1: `<p>Detail of DOUBLE A COPY PAPER 80GSM / 75GSM / 70GSM<br />&ndash; Sheet Size:210mm x 297mm/297mm x 420mm International Paper Standards Size(ISO) A4/A3<br />&ndash; Quality: Imported 100% Virgin Wood Pulp<br />&ndash; Whiteness: 102-104%, Natural White<br />&ndash; Grading: A<br />&ndash; Thickness: 106cm<br />&ndash; Capability: High-Speed Copying 100ppm, Laser Capable, Inkjet Capable, Fax Capable.<br />EXCELLENT PERFORMANCE DUE TO THE FOLLOWING CHARACTERISTICS<br />&ndash; Moisture Control &ndash; Makes the sheets stay flat in the copier and enhances run ability.<br />&ndash; Low Dust Content &ndash; Minimizing Your copier running cost.<br />&ndash; Good Opacity &ndash; Double-sided copying of the best quality<br />&ndash; Smoothness &ndash; Improving Printing Quality.<br />&ndash; Bulky Sheet &ndash; Enhancing the smooth run ability<br />BEST FOR USE WITH YOUR<br />&ndash; Photocopier<br />&ndash; Laser Printer<br />&ndash; Fax Machine<br />&ndash; Ink-jet<br />&ndash; Copier<br />&ndash; 2 side copying</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'hdpe-blue-drums-flakes', name: 'HDPE Blue Drums Flakes', image: 'assets/images/products/plastic-scrap/blue-drum-flax.jpeg',
        category: 'plastic-scrap', price: 300,
        description_1: `<div class="woocommerce-product-details__short-description">
        <p>ITEM STANDARD.<br />Melt Flow Rate(g/10min) 0.1.<br />Density(g/cm3) 0.95.<br />Power Ash% 0.01.<br />Tensile Strength(MPa) 22.<br />Elongation At Break% 600.<br />Environmental stress-cracking 1500.</p>
        </div>
        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1954">&nbsp;</div>`,
        description_2: ''
    } as Pet,

    {
        id: 'hdpe-blue-drums-scrap', name: 'HDPE Blue Drums Scrap', image: 'assets/images/products/plastic-scrap/hdpe-drum-scrap.jpeg',
        category: 'plastic-scrap', price: 300,
        description_1: `<div class="woocommerce-product-details__short-description">
        <p>We sell best quality recycled plastic scraps like LDPE Scrap,PP Scrap,EVA scrap,HDPE Scrap,PS Scrap,ABS scrap and others and we are looking for serious buyers that are in need of any type of plastic scraps contact with us for more details.<br />Brand Name: HDPE Drums Scrap<br />Model Number: PL7290<br />Color: Blue<br />Characteristic: 100% Clean<br />We also have the following products.</p>
        <p>&ndash; HDPE Clear/Natural Regrind (clean and washed).<br />&ndash; HDPE Clear/Natural Scrap Baled.<br />&ndash; HDPE White Regrind/Baled (clean and washed).<br />&ndash; HDPE Milk Bottle Regrind.<br />&ndash; LDPE Film Baled 100, 98/2, and 95/2.<br />&ndash; LDPE Clear/Natural Regrind.<br />&ndash; LDPE White Regrind.</p>
        </div>
        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1952">&nbsp;</div>`,
        description_2: ''
    } as Pet,

    {
        id: 'pet-bottle-flakes', name: 'Pet Bottle Flakes', image: 'assets/images/products/plastic-scrap/pet-Bottle-Flakes.jpg',
        category: 'plastic-scrap', price: 300,
        description_1: `<div class="woocommerce-product-details__short-description">
        <p>PET Bottles Scrap, Cold And Hot Washed PET Bottle Flakes/ Plastic PET Scrap/Clear Recycled Plastic Scraps.<br />Products&hellip;Cold And Hot Washed PET Bottle Scrap, PET Flakes<br />Grade &hellip;. Recycled flakes, hot washed by Steam 80-90 degree<br />Color &hellip;.100% Clear, White, Blue/ Green<br />Transparency &hellip;.90%<br />PVC content &hellip;.&lt; 2ppm<br />Moisture &hellip;..&lt; 1%<br />Impurities &hellip;..&lt; 0.01%</p>
        </div>
        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1948">&nbsp;</div>`,
        description_2: ''
    } as Pet,

    {
        id: 'pvc-window-profile-scrap', name: 'Pvc window profile scrap', image: 'assets/images/products/plastic-scrap/pvc-window-profile.jpeg',
        category: 'plastic-scrap', price: 300,
        description_1: `<div class="woocommerce-product-details__short-description">
        <p>Pvc window profile scrap / all types of PVC SCRAP<br />We deal in various kinds of PVC Scrap: PVC door and window frames, PVC Soft Tubes, PVC Medical bags, etc.</p>
        </div>
        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1956">&nbsp;</div>`,
        description_2: ''
    } as Pet,

    {
        id: 'computer-scrap', name: 'Computer Scrap', image: 'assets/images/products/plastic-scrap/computer-scrap.jpg',
        category: 'plastic-scrap', price: 300,
        description_1: `<p>we are computer scrap sellers in Hyderabad we sell all types of computer scrap like Computer Scrap Monitor Scrap IT Scrap Laptop Scrap Cpu Scrap Servers Scrap Hardisk Scrap.</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'tyre-scrap', name: 'Tyre Scrap', image: 'assets/images/products/plastic-scrap/tyre-scrap.jpg',
        category: 'plastic-scrap', price: 300,
        description_1: `As per the needs and requirements of our clients, we are involved in providing Tyre Scrap.`,
        description_2: ''
    } as Pet,

    {
        id: 'pp-jumbo-bags-scrap', name: 'PP Jumbo Bags Scrap', image: 'assets/images/products/plastic-scrap/pp-jumbo-bags.jpg',
        category: 'plastic-scrap', price: 300,
        description_1: `<p align="left" data-spm-anchor-id="a2700.details.0.i25.498aade9vYZfIb">PP woven bags are widely used in packing flour, sand, fertilizer, rice, sugar, seed, animal food, powdered/granular goods, construction material, etc.</p>
        <p align="left">&nbsp;</p>
        <table class="aliDataTable" border="0" cellspacing="0" cellpadding="0" align="left">
        <tbody>
        <tr align="left">
        <td>
        <p>Name</p>
        </td>
        <td>
        <p>PP Woven Bag/sack</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Style&nbsp;</p>
        </td>
        <td>
        <p>Circular woven</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Raw Material</p>
        </td>
        <td>
        <p>100% new virgin polypropylene material</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Color</p>
        </td>
        <td>
        <p>All kinds of color or as the customers' requirement</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Printing</p>
        </td>
        <td>
        <p>On side or both sides in multi-colors, offset print or color print</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Width</p>
        </td>
        <td>
        <p>From 30-220cm or as the customers' &nbsp;requirement</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Length</p>
        </td>
        <td>
        <p>As the customer&rsquo;s requirement</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Weave</p>
        </td>
        <td>
        <p>10x10,12x12,can be customized or as &nbsp; the customers' requirement</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Denier</p>
        </td>
        <td>
        <p>700D to 1000D</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Fabric</p>
        </td>
        <td>
        <p>58g/m2--220g/m2 or as the customer's requirement</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Laminated</p>
        </td>
        <td>
        <p>14g/m2 or&nbsp;as the customer's requirement</p>
        </td>
        </tr>
        <tr align="left">
        <td>Liner</td>
        <td>20-25g/m2 or&nbsp;as the customer's requirement</td>
        </tr>
        <tr align="left">
        <td>
        <p>Treat</p>
        </td>
        <td>
        <p>as the customers' requirement</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Surface Dealing</p>
        </td>
        <td>
        <p>Anti-slip or plain</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Top</p>
        </td>
        <td>
        <p>heat cut/cool cut/hemmed/valve/drawstring/tied rope or customers need</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Sealing</p>
        </td>
        <td>
        <p>Single/double fold saw the bottom</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Liner</p>
        </td>
        <td>
        <p>coated or with a liner bag for moisture-proof</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Usage</p>
        </td>
        <td>
        <p>rice, flour, sugar, fertilizer, sand, cement, and so on</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Packing</p>
        </td>
        <td>
        <p>500pcs/bundle(bale),1000pcs/bundle(bale) &nbsp; or as the customized</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Quantity Order</p>
        </td>
        <td>
        <p>Above 10000pcs</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Delivery Time</p>
        </td>
        <td>
        <p>5-20days after place an order</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Trade Term</p>
        </td>
        <td>
        <p>CIF, CNF, FOB Tianjin</p>
        </td>
        </tr>
        <tr align="left">
        <td>
        <p>Payment Term</p>
        </td>
        <td>
        <p>T/T (30% advance &nbsp; payment, and pay the balance against copy of B/L)</p>
        <p data-spm-anchor-id="a2700.details.0.i26.498aade9vYZfIb">or &nbsp; as the customers' requirement</p>
        </td>
        </tr>
        </tbody>
        </table>`,
        description_2: ''
    } as Pet,

    {
        id: 'ldpe-plastic-bags', name: 'LDPE Plastic Bags', image: 'assets/images/products/plastic-scrap/ldpe-plastic-bags.jpg',
        category: 'plastic-scrap', price: 300,
        description_1: `<p>Low-Density Polyethylene, also known as LDPE plastic, is a soft and flexible polymer. Unlike the High-Density Polyethylene (HDPE) which is known for its high specific strength and heat resistance, the LDPE has a lower density, strength, and temperature resistance in comparison. This lower density and resistance is due to the slight difference in the polybag structure where the LDPE features a higher degree of short and long side-chain branching&mdash;manufactured at a high pressure of 1000-3000 bar and a low temperature of 80-300&deg;C. This process is known as Free Radical Polymerisation which is a type of chain-growth polymerization that takes place when the polymer forms through consecutive additions of unsaturated monomer molecules to an active, free radical center.</p>
        <p>The formation of this plastic material makes it a good polymer with superb processability, has a high impact strength at low-temperature levels, chemical resistance, excellent electrical insulator, good weatherability, low water absorption, and is transparent in thin foil film. Furthermore, it also meets the FDA regulations, making it safe for contact with food products.</p>
        <h5><strong>Benefits&nbsp;</strong></h5>
        <ul>
        <li>Low-cost, lightweight, and weatherproof</li>
        <li><strong>Excellent Insulation Properties</strong>&nbsp;&ndash; Unlike HDPE, the LDPE is an excellent insulator, making it ideal for protecting electrical equipment without causing electric sparks that might potentially cause damages to electronics</li>
        <li><strong>Highly Flexible and Transparent</strong>&nbsp;&ndash; the high flexibility of the material makes it malleable and easy to process and mold into various shapes and sizes to meet different applications</li>
        <li><strong>Recyclable</strong>&nbsp;&ndash; recycled LDPE can produce a variety of products that are relevant to our everyday lives such as shipping envelopes, compost bins, trashcans, garbage can liners, furniture, floor tiles, and many more.</li>
        </ul>`,
        description_2: ''
    } as Pet,

    {
        id: 'copper-wire-scrap', name: 'Copper Wire Scrap', image: 'assets/images/products/metal-scrap/copper-scrap.jpg',
        category: 'metal-scrap', price: 300,
        description_1: `Copper wire scrap 99.99% milberry.SPECIFICATION: Copper Wire grade 1: including * dew, No coating, No alloy of pure Copper Wire, the surface without oxidation, do not contain the hair silk, Copper Wire diameter not less than 1.6 mm.1.name: high purity copper wire scrap2.copper content: 99.95% min3.material: copper4.copper scrap/palletScrap copper wire , (Millberry) 99.78% at a purity of 99.78% min. 99.78%Max.COPPER: 99, 99%CARBON: 0.03%COBLET: <0, 001IRON: 0, 005%PHOSPHORUS: <0, 01%SULPHUR: <0, 01%ZINC: 0, 003%FOB PRICE: 3000$/TonDELIVERY LEAD TIME: 15 daysPAYMENT TERMS: 40% advance payment against invoice and 60% upon arrival of goods at your port.PACKING: 50kg balesINSPECTION: SGS OR BUREAU VERITAS AT LOADING PORT AT SELLERS ACCOUNT.`,
        description_2: ''
    } as Pet,

    {
        id: 'pure-aluminum-scrap', name: 'Pure Aluminum Scrap', image: 'assets/images/products/metal-scrap/pure-aluminium-scrap.jpeg',
        category: 'metal-scrap', price: 300,
        description_1: `<ul class="poi-list">
        <li class=""><span class="poi-val">Material:&nbsp; Aluminum</span></li>
        <li class=""><span class="poi-lbl">Application:&nbsp;&nbsp;</span><span class="poi-val">Casting</span></li>
        <li class=""><span class="poi-lbl">Color:&nbsp;&nbsp;</span><span class="poi-val">Silver</span></li>
        <li class=""><span class="poi-lbl">Surface Treatment:&nbsp;&nbsp;</span><span class="poi-val">Polished</span></li>
        <li class=""><span class="poi-lbl">Feature:&nbsp;&nbsp;</span><span class="poi-val">High In Quality, Recyclable</span></li>
        <li class=""><span class="poi-lbl">Al Content (%):&nbsp;&nbsp;</span><span class="poi-val">99%,99%</span></li>
        </ul>`,
        description_2: ''
    } as Pet,

    {
        id: 'ac-fridge-compresor-scrap', name: 'Compressor Scrap', image: 'assets/images/products/metal-scrap/compressors-scrap.jpg',
        category: 'metal-scrap', price: 300,
        description_1: `<p><strong><span data-spm-anchor-id="a2700.details.pronpeci14.i0.2c953676bI3bzd">Fridge/AC Compressor Scraps</span></strong><br /><strong>We sell Fridge/AC Compressor Scraps at a very competitive market price.</strong><br /><strong>Please let us know if you have a target price.</strong></p>
        <p><strong>Please kindly find some specifications below in your inquiring form.</strong><br /><strong>1) Quantity: between 1,500 MT up to 3,600 MT per month.</strong><br /><strong>2) Packing: As buyer requires (20ft container is up to 3000 pcs to 3450 pcs of&nbsp;compressors in the container. 25 MT or 50 MT)</strong><br /><strong>3) Delivery: Immediately and prompt.</strong><strong>Delivery Time: 10-21 days depending on delivery port..</strong></p>
        <p><strong>Specifications</strong><br /><strong>Drained Copper Compressor &ndash; Fridges/AC (RAINS per ISRI Specifications).</strong><br /><strong>Our copper content on 99.97 %</strong><br /><strong>Monthly Supply Capacity: 500 &ndash; 1500 metric tons,</strong><br /><strong>Type: Fridges, AC.</strong><br /><strong>Packaging Detail:&nbsp; Wood Pallets, 20(40) FCL/ According to ISRI Specification in Containers</strong><br /><strong>Quantity: Between 200~500MT per month</strong><br /><strong>Minimum Order acceptable 1x20FCL (25MT or 26MT/20FCL, 3000 or 3450 Pieces/20FCL</strong></p>`,
        description_2: ''
    } as Pet,

    {
        id: 'battery-scrap', name: 'Battery Scrap', image: 'assets/images/products/metal-scrap/battery-scrap.jpg',
        category: 'metal-scrap', price: 300,
        description_1: `<table>
        <tbody>
        <tr>
        <td colspan="1" rowspan="1">
        <div>item</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>value</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Place of Origin</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>Japan</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Brand Name</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>Battery Scrap</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Model Number</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>ISRI 200-206</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Type</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>Lead Battery Plate Scrap</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Pb Content (%)</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>99.95%</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Product Name</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>Drained Battery Scrap</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Material</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>Car Battery</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Battery scrap</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>Lead-Acid Auto Battery Scrap</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Type</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>All kind of scrap brand Batteries</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Fe Content</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>HMS</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Color</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>Black/ Multicolor</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Quality</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>GRADE AAA</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Size</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>151*65*94mm</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Polypropylene</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>5 - 8</div>
        </td>
        </tr>
        <tr>
        <td colspan="1" rowspan="1">
        <div>Sulphuric acid (10 - 20 % H2SO4)</div>
        </td>
        <td colspan="1" rowspan="1">
        <div>10 - 15</div>
        </td>
        </tr>
        </tbody>
        </table>`,
        description_2: ''
    } as Pet,

    {
        id: 'electric-motor-scrap', name: 'Electric Motor Scrap', image: 'assets/images/products/metal-scrap/electric-motor-scrap.jpg',
        category: 'metal-scrap', price: 300,
        description_1: `<p><strong>We are direct suppliers of ELECTRIC MOTOR SCRAP, our ELECTRIC MOTOR SCRAP is free from any contamination or whatsoever. We can supply large quantities on a monthly basis at competitive prices.</strong></p>
        <p><strong>We hope to work with your esteemed company on a long-term basis.</strong></p>
        <p><strong>We supply 200 to 300 MT monthly supply and affordable</strong></p>
        <p>We shall be looking forward to welcoming your inquiries.<br />Thank you.</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'railway-scrap', name: 'Railway Scrap', image: 'assets/images/products/metal-scrap/railway-scrap.jpg',
        category: 'metal-scrap', price: 300,
        description_1: `<p data-spm-anchor-id="a2700.details.pronpeci14.i0.5d641621mT1npl">HMS 1/2 SCRAP / METAL SCRAP / HEAVY STEEL SCRAP / /Heavy Melting Steel Scrap Metals for sale.We can supply you HMS scraps, HMS 1, HMS 1/2, Used rails scraps.Chemical Composition:&nbsp;C:0.06 - 0.082%&nbsp;Mn:0.75 - 1.05%&nbsp;SI:0.13 - 0.28%&nbsp;P: Max 0.035%&nbsp;S: Max 0.045%&nbsp;Ar: Max 0.15%We have Used Rails | HMS 1:2ISRI CODE R50-R65CompositionC - 0.54-0.82%,SI - 0.18-0.40%,MN - 0.60-1.05%,S - 0.04% maximumP - 0.035% maximumAS: - 0.01% Maximum of Mass ShareHMS is usually traded as a blend of 1 &amp; 2, either a premium blend (80:20) or lower grade mixes (70:30) and (60:40).</p>
        <p>C:0.06 - 0.082%&nbsp;Mn:0.75 - 1.05%&nbsp;SI:0.13 - 0.28%&nbsp;P: Max 0.035%&nbsp;S: Max 0.045%&nbsp;Ar: Max 0.15%.</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'brass-and-bronze-scrap', name: 'Brass & Bronze Scrap', image: 'assets/images/products/metal-scrap/brass-scrap.jpg',
        category: 'metal-scrap', price: 300,
        description_1: `<p><span data-spm-anchor-id="a2700.details.0.i14.676a4efafWioXw">Specification</span><br />- Temper: 'O' 1/2 H<br />- Tensile Strength: 340 Min-400 Min<br />- Elongation % on 50 mm G.L : 40 Min<br />- Vickers Hardness VPN: 80 Max/95 Min-120 Min<br />-Cu -: 58% - 60%<br />-Pb -: 1.5% - 2.5%<br />-Imp -: 0.3% (Max.)<br />-Zn -: Remaining Consist of doors and windows Profile frame, house utensils<br />Our Brass Honey Scrap consists of Faucet scrap, a scrap of machinery parts, plated brass, etc</p>`,
        description_2: ''
    } as Pet,

    {
        id: 'sorted-office-papers', name: 'SOP (Sorted Office Papers)', image: 'assets/images/products/waste-papers/sorted-office-paper.jpg',
        category: 'waste-papers', price: 300,
        description_1: `<p><strong><em data-spm-anchor-id="a2700.details.0.i6.7f922143EyrHtv">we export all kinds of paper scrap from our direct yards in different countries!&nbsp;</em></strong><strong>&nbsp;</strong></p>
        <p><strong><em>We have materials from UAE, UK, Israel, Sudan, Canada, and the USA!</em></strong><strong>&nbsp;</strong></p>
        <p><strong><em>Competitive price and prompt delivery!</em></strong></p>`,
        description_2: ''
    } as Pet,

    {
        id: 'yellow-page-papers', name: 'Yellow Pages Scrap', image: 'assets/images/products/waste-papers/yellow-pages.png',
        category: 'waste-papers', price: 300,
        description_1: `<p><strong><em data-spm-anchor-id="a2700.details.0.i6.7f922143EyrHtv">we export all kinds of paper scrap from our direct yards in different countries!&nbsp;</em></strong><strong>&nbsp;</strong></p>
        <p><strong><em>We have materials from UAE, UK, Israel, Sudan, Canada, and the USA!</em></strong><strong>&nbsp;</strong></p>
        <p><strong><em>Competitive price and prompt delivery!</em></strong></p>`,
        description_2: ''
    } as Pet,

    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg',
    //     category: '', price: 300,
    //     description_1: ``,
    //     description_2: ''
    // } as Pet,

    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg',
    //     category: '', price: 300,
    //     description_1: ``,
    //     description_2: ''
    // } as Pet,

    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg',
    //     category: '', price: 300,
    //     description_1: ``,
    //     description_2: ''
    // } as Pet,

    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg',
    //     category: '', price: 300,
    //     description_1: ``,
    //     description_2: ''
    // } as Pet,

    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg',
    //     category: '', price: 300,
    //     description_1: ``,
    //     description_2: ''
    // } as Pet,

];
  