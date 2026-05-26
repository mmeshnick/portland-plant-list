
// ── DATA ───────────────────────────────────────────────────────────────────

const NATIVE = [
  {c:"Grand Fir",l:"Abies grandis",t:"Large Tree",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Bigleaf Maple",l:"Acer macrophyllum",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Vine Maple",l:"Acer circinatum",t:"Small Tree",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Red Alder",l:"Alnus rubra",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Any moisture"},
  {c:"Pacific Madrone",l:"Arbutus menziesii",t:"Large Tree",sun:["Full Sun"],m:"Dry"},
  {c:"Pacific Dogwood",l:"Cornus nuttallii",t:"Large Tree",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Oregon Ash",l:"Fraxinus latifolia",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Ponderosa Pine",l:"Pinus ponderosa",t:"Large Tree",sun:["Full Sun"],m:"Dry"},
  {c:"Quaking Aspen",l:"Populus tremuloides",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Black Cottonwood",l:"Populus trichocarpa",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Any moisture"},
  {c:"Douglas-fir",l:"Pseudotsuga menziesii",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Any moisture"},
  {c:"Oregon Oak",l:"Quercus garryana",t:"Large Tree",sun:["Full Sun"],m:"Dry"},
  {c:"Pacific Willow",l:"Salix lasiandra",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Scouler's Willow",l:"Salix scouleriana",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Pacific Yew",l:"Taxus brevifolia",t:"Large Tree",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Western Hemlock",l:"Tsuga heterophylla",t:"Large Tree",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Western Red Cedar",l:"Thuja plicata",t:"Large Tree",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Black Hawthorn",l:"Crataegus suksdorfii",t:"Small Tree",sun:["Full Sun","Part Shade","Full Shade"],m:"Any moisture"},
  {c:"Western Crabapple",l:"Malus fusca",t:"Small Tree",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Bitter Cherry",l:"Prunus emarginata",t:"Small Tree",sun:["Full Sun"],m:"Moist-seasonally wet"},
  {c:"Cascara",l:"Rhamnus purshiana",t:"Small Tree",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Sitka Willow",l:"Salix sitchensis",t:"Small Tree",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Serviceberry",l:"Amelanchier alnifolia",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Any moisture"},
  {c:"Hairy Manzanita",l:"Arctostaphylos columbiana",t:"Large Shrub",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Red-osier Dogwood",l:"Cornus stolonifera",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Moist-perennially wet"},
  {c:"Hazelnut",l:"Corylus cornuta",t:"Large Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist"},
  {c:"Western Wahoo",l:"Euonymus occidentalis",t:"Large Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist"},
  {c:"Oceanspray",l:"Holodiscus discolor",t:"Large Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Any moisture"},
  {c:"Black Twinberry",l:"Lonicera involucrata",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Tall Oregon Grape",l:"Mahonia aquifolium",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Osoberry (Indian Plum)",l:"Oemleria cerasiformis",t:"Large Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Mock Orange",l:"Philadelphus lewisii",t:"Large Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Pacific Ninebark",l:"Physocarpus capitatus",t:"Large Shrub",sun:["Part Shade"],m:"Moist-seasonally wet"},
  {c:"Chokecherry",l:"Prunus virginiana",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Any moisture"},
  {c:"Wild Gooseberry",l:"Ribes divaricatum",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Blue (Stink) Currant",l:"Ribes bracteosum",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Red-flowering Currant",l:"Ribes sanguineum",t:"Large Shrub",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Nootka Rose",l:"Rosa nutkana",t:"Large Shrub",sun:["Full Sun"],m:"Any moisture"},
  {c:"Clustered/Swamp Rose",l:"Rosa pisocarpa",t:"Large Shrub",sun:["Full Sun"],m:"Moist-seasonally wet"},
  {c:"Baldhip Rose",l:"Rosa gymnocarpa",t:"Large Shrub",sun:["Part Shade","Full Shade"],m:"Any moisture"},
  {c:"Thimbleberry",l:"Rubus parviflorus",t:"Large Shrub",sun:["Full Sun","Full Shade"],m:"Any moisture"},
  {c:"Salmonberry",l:"Rubus spectabilis",t:"Large Shrub",sun:["Full Shade"],m:"Moist-seasonally wet"},
  {c:"Columbia River Willow",l:"Salix fluviatilis",t:"Large Shrub",sun:["Full Sun"],m:"Any moisture"},
  {c:"Hooker Willow",l:"Salix hookeriana",t:"Large Shrub",sun:["Full Sun"],m:"Moist-seasonally wet"},
  {c:"Blue Elderberry",l:"Sambucus cerulea",t:"Large Shrub",sun:["Full Sun"],m:"Any moisture"},
  {c:"Red Elderberry",l:"Sambucus racemosa",t:"Large Shrub",sun:["Full Sun","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Evergreen Huckleberry",l:"Vaccinium ovatum",t:"Large Shrub",sun:["Full Sun","Full Shade"],m:"Dry-moist"},
  {c:"Red Huckleberry",l:"Vaccinium parvifolium",t:"Large Shrub",sun:["Full Shade"],m:"Dry-moist"},
  {c:"Oval-leaved Viburnum",l:"Viburnum ellipticum",t:"Large Shrub",sun:["Full Shade"],m:"Dry-moist"},
  {c:"Kinnikinnick",l:"Arctostaphylos uva-ursi",t:"Small/Medium Shrub",sun:["Full Sun"],m:"Any moisture"},
  {c:"Oregon Tea Tree",l:"Ceanothus sanguineus",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade"],m:"Dry"},
  {c:"Snowbrush",l:"Ceanothus velutinus",t:"Small/Medium Shrub",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Salal",l:"Gaultheria shallon",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Chaparral Honeysuckle Vine",l:"Lonicera hispidula",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade"],m:"Dry"},
  {c:"Orange Honeysuckle Vine",l:"Lonicera ciliosa",t:"Small/Medium Shrub",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Cascade Oregon Grape",l:"Mahonia nervosa",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Pioneer Gooseberry",l:"Ribes lobii",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Dewberry",l:"Rubus ursinus",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Any moisture"},
  {c:"Birch-leaved Spirea",l:"Spiraea betulifolia",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade"],m:"Any moisture"},
  {c:"Western Spirea",l:"Spiraea douglasii",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade"],m:"Any moisture"},
  {c:"Common Snowberry",l:"Symphoricarpos albus",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Any moisture"},
  {c:"Creeping Snowberry",l:"Symphoricarpos mollis",t:"Small/Medium Shrub",sun:["Full Sun","Part Shade","Full Shade"],m:"Any moisture"},
  {c:"Maidenhair Fern",l:"Adiantum pedatum",t:"Fern",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Lady Fern",l:"Athyrium filix-femina",t:"Fern",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Deer Fern",l:"Blechnum spicant",t:"Fern",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Wood Fern",l:"Dryopteris expansa",t:"Fern",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Oak Fern",l:"Gymnocarpium dryopteris",t:"Fern",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Licorice Fern",l:"Polypodium glycyrrhiza",t:"Fern",sun:["Part Shade","Full Shade"],m:"Moist-wet"},
  {c:"Sword Fern",l:"Polystichum munitum",t:"Fern",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Bracken Fern",l:"Pteridium aquilinum",t:"Fern",sun:["Full Sun","Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Dense Sedge",l:"Carex densa",t:"Ground Cover",sun:["Full Sun"],m:"Wet"},
  {c:"Dewey Sedge",l:"Carex deweyana",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Slough Sedge",l:"Carex obnupta",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Seasonally wet-submerged"},
  {c:"Sawbeak Sedge",l:"Carex stipata",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Perennially wet-submerged"},
  {c:"Tufted Hairgrass",l:"Deschampsia caespitosa",t:"Ground Cover",sun:["Full Sun"],m:"Moist-perennially wet"},
  {c:"Blue Wild Rye",l:"Elymus glaucus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Meadow Barley",l:"Hordeum brachyantherum",t:"Ground Cover",sun:["Full Sun"],m:"Moist-seasonally wet"},
  {c:"Baltic Rush",l:"Juncus balticus",t:"Ground Cover",sun:["Full Sun"],m:"Any moisture"},
  {c:"Common Rush",l:"Juncus effusus",t:"Ground Cover",sun:["Full Sun"],m:"Any moisture"},
  {c:"Dagger-leaved Rush",l:"Juncus ensifolius",t:"Ground Cover",sun:["Full Sun"],m:"Any moisture"},
  {c:"Spreading Blue Rush",l:"Juncus patens",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"June Grass",l:"Koeleria macrantha",t:"Ground Cover",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Small-Flowered Wood Rush",l:"Luzula parviflora",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Hard-Stem Bulrush",l:"Scirpus acutus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Perennially wet-submerged"},
  {c:"Small-Fruited Bulrush",l:"Scirpus microcarpus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Perennially wet-submerged"},
  {c:"Cattail",l:"Typha latifolia",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Seasonally wet-submerged"},
  {c:"Common Yarrow",l:"Achillea millefolium",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Hooker's Onion",l:"Allium acuminatum",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Nodding Onion",l:"Allium cernuum",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Pearly Everlasting",l:"Anaphalis margaritacea",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Vanilla Leaf",l:"Achlys triphylla",t:"Ground Cover",sun:["Part Shade"],m:"Moist"},
  {c:"Columbian Windflower",l:"Anemone deltoidea",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Western Red Columbine",l:"Aquilegia formosa",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Wild Ginger",l:"Asarum caudatum",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Great Northern Aster",l:"Aster modestus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Douglas' Aster",l:"Aster subspicatus",t:"Ground Cover",sun:["Full Sun"],m:"Moist"},
  {c:"Tall Boykinia",l:"Boykinia major",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Hyacinth Brodiaea",l:"Brodiaea hyacinthia",t:"Ground Cover",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Calypso Orchid",l:"Calypso bulbosa",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Tall/Great Camas",l:"Camassia leichtlinii",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Seasonally wet"},
  {c:"Common Camas",l:"Camassia quamash",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Seasonally wet"},
  {c:"Common Harebell",l:"Campanula rotundifolia",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Fireweed",l:"Chamerion angustifolium",t:"Ground Cover",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Farewell to Spring",l:"Clarkia amoena",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Miner's Lettuce",l:"Claytonia perfoliata",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Streambank Spring Beauty",l:"Claytonia parviflora",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Candyflower",l:"Claytonia sibirica",t:"Ground Cover",sun:["Full Shade"],m:"Moist"},
  {c:"Small Blue-Eyed Mary",l:"Collinsia parviflora",t:"Ground Cover",sun:["Full Sun"],m:"Any moisture"},
  {c:"Collomia",l:"Collomia grandiflorum",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Bunchberry",l:"Cornus unalaschkensis",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Scouler's Corydalis",l:"Corydalis scouleri",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Upland Larkspur",l:"Delphinium nuttallianum",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Menzie's Larkspur",l:"Delphinium menziesii",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Pacific Bleeding Heart",l:"Dicentra formosa",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Cluster Lily",l:"Dichelostemma congestum",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Shooting Star",l:"Dodecatheon hendersonii",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry"},
  {c:"Shooting Star",l:"Dodecatheon pulchellum",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Oregon Sunshine",l:"Eriophyllum lanatum",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Fawn/Trout Lily",l:"Erythronium oreganum",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"California Poppy",l:"Eschscholzia californica",t:"Ground Cover",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Woodland Strawberry",l:"Fragaria vesca",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Wild Strawberry",l:"Fragaria virginiana",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Checker Lily",l:"Fritillaria affinis",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Blue Globe Gilia",l:"Gilia capitata",t:"Ground Cover",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Rattlesnake Plantain",l:"Goodyera oblongifolia",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Cow Parsnip",l:"Heracleum lanatum",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-wet"},
  {c:"Small-flowered Alumroot",l:"Heuchera micrantha",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Smooth Alumroot",l:"Heuchera glabra",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist"},
  {c:"Pacific Waterleaf",l:"Hydrophyllum tenuipes",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist"},
  {c:"Oregon Iris",l:"Iris tenax",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Tiger Lily",l:"Lilium columbianum",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Twinflower",l:"Linnaea borealis",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Prairie Stars",l:"Lithophragma parviflorum",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry"},
  {c:"Columbia Gorge Lupine",l:"Lupinus latifolius",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Large-leaved Lupine",l:"Lupinus polyphyllus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Streambank Lupine",l:"Lupinus rivularis",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Skunk Cabbage",l:"Lysichiton americanum",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-perennially wet"},
  {c:"False Lily of the Valley",l:"Maianthemum dilatatum",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Bluebells",l:"Mertensia platyphylla",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Yellow Monkeyflower",l:"Mimulus guttatus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-perennially wet"},
  {c:"Musk-flower",l:"Mimulus moschatus",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Creeping Mitella",l:"Mitella caulescens",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Turtleshead",l:"Nothochelone nemorosa",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Grass Widow",l:"Olsynium douglasii",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Devil's Club",l:"Oplopanax horridus",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Redwood Sorrel",l:"Oxalis oregana",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Trillium-leaved Oxalis",l:"Oxalis trillifolia",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Ovate Penstemon",l:"Penstemon ovatus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Cut-leaved Penstemon",l:"Penstemon richardsonii",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry"},
  {c:"Cascade Penstemon",l:"Penstemon serrulatus",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Coltsfoot",l:"Petasites frigidus",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Sticky Cinquefoil",l:"Potentilla glandulosa",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Graceful Cinquefoil",l:"Potentilla gracilis",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Hooker's Bells",l:"Prosartes hookeri",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Smith's Bells",l:"Prosartes smithii",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Self-heal",l:"Prunella vulgaris",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist"},
  {c:"Wapato",l:"Sagittaria latifolia",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Seasonally wet-submerged"},
  {c:"Yerba Buena",l:"Satureja douglasii",t:"Ground Cover",sun:["Part Shade"],m:"Dry-moist"},
  {c:"Western Saxifrage",l:"Saxifraga occidentalis",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Oregon Saxifrage",l:"Saxifraga oregana",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"Oregon Stonecrop",l:"Sedum oreganum",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Broad-leaved Sedum",l:"Sedum spathulifolium",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Willamette Valley Checkermallow",l:"Sidalcea campestris",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry-moist"},
  {c:"Nelson's Checkermallow",l:"Sidalcea nelsoniana",t:"Ground Cover",sun:["Full Sun"],m:"Dry-moist"},
  {c:"Blue-eyed Grass",l:"Sisyrinchium angustifolium",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-seasonally wet"},
  {c:"False Solomon's Seal",l:"Smilacina racemosa",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Star-Flowered Solomon's Seal",l:"Smilacina stellata",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Goldenrod",l:"Solidago canadensis",t:"Ground Cover",sun:["Full Sun"],m:"Dry"},
  {c:"Twisted Stalk",l:"Streptopus amplexifolius",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Spring Queen",l:"Synthyris reniformis",t:"Ground Cover",sun:["Part Shade"],m:"Moist"},
  {c:"Fringe Cup",l:"Tellima grandiflora",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Western Meadow Rue",l:"Thalictrum occidentale",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Foam Flower",l:"Tiarella trifoliata",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Piggy-back Plant",l:"Tolmiea menziesii",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Western Starflower",l:"Trientalis latifolia",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Sessile Trillium",l:"Trillium chloropetalum",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Western Trillium",l:"Trillium ovatum",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Inside-Out Flower",l:"Vancouveria hexandra",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Corn Lily",l:"Veratrum californicum",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Moist-perennially wet"},
  {c:"Wild Hyssop",l:"Verbena hastata",t:"Ground Cover",sun:["Full Sun"],m:"Moist"},
  {c:"American Brooklime",l:"Veronica americana",t:"Ground Cover",sun:["Full Sun"],m:"Seasonally-perennially wet"},
  {c:"Early Blue Violet",l:"Viola adunca",t:"Ground Cover",sun:["Full Sun","Part Shade","Full Shade"],m:"Dry-moist"},
  {c:"Yellow Stream Violet",l:"Viola glabella",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist"},
  {c:"Evergreen Violet",l:"Viola sempervirens",t:"Ground Cover",sun:["Part Shade","Full Shade"],m:"Moist-seasonally wet"},
  {c:"Modesty",l:"Whipplea modesta",t:"Ground Cover",sun:["Full Sun","Part Shade"],m:"Dry"},
  {c:"Baneberry",l:"Actaea rubra",t:"Ground Cover",sun:["Full Shade"],m:"Moist"},
  {c:"Angled Bitter-cress",l:"Cardamine angulata",t:"Ground Cover",sun:["Full Shade"],m:"Moist"},
  {c:"Enchanter's Nightshade",l:"Circaea alpina",t:"Ground Cover",sun:["Full Shade"],m:"Moist"},
];

const NUISANCE = [
  {c:"Knotweed (Japanese/Giant/Hybrid)",l:"Fallopia japonica / F. sachalinensis / F. ×bohemica",r:"E",cat:"Forb",note:"Extremely aggressive spreader along waterways; nearly impossible to eradicate once established. Hollow stems form dense thickets to 10ft tall."},
  {c:"Garlic Mustard",l:"Alliaria petiolata",r:"E",cat:"Forb",note:"Releases chemicals that inhibit native plant and mycorrhizal fungi growth; spreads rapidly through forests."},
  {c:"Butterfly Bush",l:"Buddleja davidii",r:"E",cat:"Shrub",note:"Popular ornamental that escapes into natural areas and riparian zones; seeds prolifically and outcompetes native vegetation."},
  {c:"English Ivy",l:"Hedera helix",r:"A",cat:"Vine/Ground Cover",note:"Smothers native understory and climbs trees, eventually killing them. One of Portland's most damaging invasives; forms 'ivy deserts' on the forest floor."},
  {c:"Himalayan Blackberry",l:"Rubus armeniacus",r:"A",cat:"Shrub",note:"Dense thorny thickets crowd out native plants and impede wildlife movement; especially damaging along stream corridors and in disturbed areas."},
  {c:"English Holly",l:"Ilex aquifolium",r:"A",cat:"Tree/Shrub",note:"Bird-dispersed berries spread into forest understory where it shades out native vegetation; very shade-tolerant and persistent."},
  {c:"Reed Canary Grass",l:"Phalaris arundinacea",r:"A",cat:"Grass",note:"Dominates wetland areas, forming dense monocultures that eliminate native wetland plant communities and reduce wildlife habitat."},
  {c:"Scots Broom",l:"Cytisus scoparius",r:"A",cat:"Shrub",note:"Fixes nitrogen and alters soil chemistry; rapidly colonizes disturbed areas and prairie habitats. Seeds persist in soil for decades."},
  {c:"Yellow Flag Iris",l:"Iris pseudacorus",r:"A",cat:"Forb",note:"Dominates wetland edges and shallows; all parts are toxic to livestock and can cause skin irritation in humans. Very difficult to control."},
  {c:"Purple Loosestrife",l:"Lythrum salicaria",r:"A",cat:"Forb",note:"Dense wetland infestations eliminate native marsh plants and the wildlife habitat they support; one plant can produce millions of seeds."},
  {c:"Policeman's Helmet",l:"Impatiens glandulifera",r:"A",cat:"Forb",note:"Annual that produces thousands of seeds per plant; explosively dispersed. Rapidly colonizes riparian areas and shaded streamsides."},
  {c:"Spurge Laurel",l:"Daphne laureola",r:"A",cat:"Shrub",note:"Shade-tolerant evergreen shrub that invades forest understory; all parts highly toxic if ingested. Berries spread by birds."},
  {c:"Herb Robert",l:"Geranium robertianum",r:"A",cat:"Forb",note:"Prolific seeder that forms dense mats in forested areas, suppressing native seedlings. Spreads readily from garden plantings."},
  {c:"Lesser Celandine",l:"Ficaria verna",r:"A",cat:"Forb",note:"Bulb-forming spring ephemeral that carpets forest floors before native plants emerge, depleting light and soil resources."},
  {c:"English Laurel",l:"Prunus laurocerasus",r:"A",cat:"Shrub/Tree",note:"Shade-tolerant; spreads from garden plantings into natural areas, forming dense understory thickets. Bird-dispersed."},
  {c:"Common St. John's Wort",l:"Hypericum perforatum",r:"A",cat:"Forb",note:"Spreads into disturbed upland areas and meadows; toxic to livestock when consumed in quantity. Prolific seed producer."},
  {c:"Tansy Ragwort",l:"Senecio jacobaea",r:"A",cat:"Forb",note:"Toxic to horses and livestock (causes liver damage); spreads rapidly into meadows, disturbed areas, and roadsides via wind-borne seeds."},
  {c:"Old Man's Beard / Traveller's Joy",l:"Clematis vitalba",r:"B",cat:"Vine",note:"Vigorous vine that smothers shrubs and trees in riparian areas and forest edges; forms dense canopy-smothering masses."},
  {c:"Cotoneaster",l:"Cotoneaster spp.",r:"B",cat:"Shrub",note:"Multiple species spread by birds into natural areas from garden plantings; shade-tolerant and persistent."},
  {c:"English Hawthorn",l:"Crataegus monogyna",r:"B",cat:"Tree",note:"European hawthorn invades open woodlands and disturbed areas; very thorny thickets exclude native species."},
  {c:"Periwinkle",l:"Vinca major / V. minor",r:"B",cat:"Ground Cover",note:"Dense mats in forest understory exclude native wildflowers and seedlings; spreads by runners and is very difficult to remove."},
  {c:"Creeping Buttercup",l:"Ranunculus repens",r:"B",cat:"Forb",note:"Spreads by runners in moist soils; invades riparian areas, wet meadows, and lawns adjacent to natural areas."},
  {c:"Bittersweet Nightshade",l:"Solanum dulcamara",r:"B",cat:"Vine/Forb",note:"Climbs over native vegetation in moist areas; purple-red berries are toxic to children and pets."},
  {c:"Yellow Archangel",l:"Lamiastrum galeobdolon",r:"B",cat:"Ground Cover",note:"Escapes from gardens into forests, spreading by long stolons to form extensive dense mats that exclude native understory."},
  {c:"Ground Ivy",l:"Glechoma hederacea",r:"B",cat:"Ground Cover",note:"Spreads into moist, shaded areas and riparian zones from garden and lawn areas; fragrant but invasive."},
  {c:"Common Foxglove",l:"Digitalis purpurea",r:"B",cat:"Forb",note:"Biennial that spreads into forest openings and disturbed areas; all parts highly toxic if ingested. Prolific seed producer."},
  {c:"Meadow Hawkweed",l:"Hieracium caespitosum",r:"B",cat:"Forb",note:"Spreads by runners and wind-borne seeds; forms dense colonies in meadows and open areas that exclude native grasses and forbs."},
  {c:"Canada Thistle",l:"Cirsium arvense",r:"B",cat:"Forb",note:"Deep, spreading root system makes control very difficult; invades disturbed areas, meadows, and riparian zones."},
  {c:"Bull Thistle",l:"Cirsium vulgare",r:"B",cat:"Forb",note:"Biennial thistle that spreads prolifically by wind into disturbed areas and open habitats."},
  {c:"Poison Hemlock",l:"Conium maculatum",r:"B",cat:"Forb",note:"Highly toxic to humans and animals (all parts); spreads in disturbed moist areas and roadsides. Can be mistaken for edible plants."},
  {c:"Giant Hogweed",l:"Heracleum mantegazzianum",r:"B",cat:"Forb",note:"Sap causes severe phototoxic skin burns and potential blindness; tall biennial invading moist, disturbed areas."},
  {c:"Common Teasel",l:"Dipsacus fullonum",r:"B",cat:"Forb",note:"Spreads into disturbed areas and dry meadows; spiny stems and seed heads. Each plant produces thousands of seeds."},
  {c:"Portugal Laurel",l:"Prunus lusitanica",r:"C",cat:"Tree/Shrub",note:"Less invasive than English Laurel but still spreads from ornamental plantings via bird-dispersed berries."},
  {c:"Firethorn",l:"Pyracantha coccinea",r:"C",cat:"Shrub",note:"Spreads from garden plantings into disturbed areas via bird-dispersed berries; thorny and persistent."},
  {c:"Japanese Barberry",l:"Berberis thunbergii",r:"C",cat:"Shrub",note:"Thorny shrub that spreads into forest edges and disturbed areas; alters soil pH and promotes invasive earthworms."},
  {c:"Wisteria",l:"Wisteria sinensis / W. floribunda",r:"C",cat:"Vine",note:"Escapes gardens and can girdle and kill trees; very vigorous climber with extensive root systems."},
  {c:"Mugwort",l:"Artemisia vulgaris",r:"C",cat:"Forb",note:"Aromatic perennial that spreads aggressively in disturbed areas and along roadsides via rhizomes."},
  {c:"Oxeye Daisy",l:"Leucanthemum vulgare",r:"C",cat:"Forb",note:"Spreads into meadows and open areas, displacing native wildflowers. Attractive but invasive."},
  {c:"Velvet Grass",l:"Holcus lanatus",r:"C",cat:"Grass",note:"Invasive grass that spreads into meadows and disturbed areas, crowding out native grasses and forbs."},
  {c:"Wild Chervil",l:"Anthriscus sylvestris",r:"C",cat:"Forb",note:"Tall biennial that spreads along roadsides and into disturbed riparian areas; can resemble poison hemlock."},
  {c:"Italian Arum",l:"Arum italicum",r:"C",cat:"Forb",note:"Bulb-forming invasive that spreads in shaded areas; bright red berries toxic to children. Spreads from ornamental plantings."},
  {c:"Multiflora Rose",l:"Rosa multiflora",r:"C",cat:"Shrub",note:"Forms dense impenetrable thickets in open areas; spreads by bird-dispersed seeds. Each plant can produce millions of seeds."},
  {c:"Japanese Honeysuckle",l:"Lonicera japonica",r:"C",cat:"Vine",note:"Twining vine that smothers native vegetation; spreads by birds and underground runners."},
  {c:"Evergreen Clematis",l:"Clematis armandii",r:"C",cat:"Vine",note:"Evergreen vine that escapes gardens and spreads in mild-climate natural areas, particularly riparian corridors."},
  {c:"Orange Hawkweed",l:"Hieracium aurantiacum",r:"W",cat:"Forb",note:"Spreads by stolons and wind-borne seeds into meadows and open areas; forms patches that exclude native species."},
  {c:"Tree of Heaven",l:"Ailanthus altissima",r:"W",cat:"Tree",note:"Fast-growing tree that sprouts prolifically from roots and stumps; beginning to spread in Portland's urban natural areas."},
  {c:"Mimosa / Silk Tree",l:"Albizia julibrissin",r:"W",cat:"Tree",note:"Ornamental tree that seeds prolifically; spreading in disturbed areas in mild Pacific Northwest climates."},
  {c:"Princess Tree",l:"Paulownia tomentosa",r:"W",cat:"Tree",note:"Very fast growing; produces hundreds of thousands of wind-dispersed seeds per capsule; spreading into disturbed areas."},
  {c:"Non-native Phragmites",l:"Phragmites australis (non-native genotype)",r:"W",cat:"Grass",note:"Aggressive non-native genotype replacing native Phragmites stands in wetlands; currently limited in Portland but actively spreading."},
  {c:"Himalayan Honeysuckle",l:"Leycesteria formosa",r:"W",cat:"Shrub",note:"Bird-dispersed ornamental spreading into moist forest edges and disturbed riparian areas in Portland."},
  {c:"Kudzu",l:"Pueraria montana",r:"W",cat:"Vine",note:"Currently rare in Portland but one of the most extreme invasive threats known. Eradicate immediately if found."},
  {c:"Weeping Willow",l:"Salix babylonica / S. × sepulcralis",r:"W",cat:"Tree",note:"Ornamental willows hybridize with native willows, threatening the genetic integrity of native populations along waterways."},
];

// ── STATE ──────────────────────────────────────────────────────────────────
let activeTab = 'native';
let nativeSun = 'all', nativeType = null;
let nuisanceRank = 'all';
let nativeExp = null, nuisanceExp = null;

const RANK_LABELS = {
  A:'Rank A', B:'Rank B', C:'Rank C', D:'Rank D', W:'Rank W — Watch', E:'Required Eradication List',
};
const RANK_DESC = {
  A:'Known to be invasive. Occurs in the region but is not yet widely distributed — limited to a few sites. Spreads rapidly and is difficult to control once widespread.',
  B:'Known to be invasive. Occurs in the region and is more abundant than Rank A, but distribution is still limited to patches or specific habitats. Can spread rapidly and is difficult to control once widespread.',
  C:'Known to be invasive. Widely distributed and abundant throughout the region — considered ubiquitous in natural areas. Difficult to control once widespread.',
  D:'Less aggressive than A, B, and C species. Known to occur in the region but persists alongside native species with less impact on the ecosystem.',
  W:'Watch species. Occurrence and distribution should be monitored for presence and/or to determine the level of invasiveness in the region.',
  E:'Plants on the Required Eradication List must be removed from property per Portland City Code Title 29, regardless of whether a land use review is pending. Refusing to manage these plants can result in penalties.',
};

// ── PDF PAGE MAPPING ───────────────────────────────────────────────────────
const PDF_BASE = 'https://backyardhabitats.org/wp-content/uploads/2018/03/Portland-Plant-List.pdf';
const SEDGE_RUSH_LATINS = new Set([
  'Carex densa','Carex deweyana','Carex obnupta','Carex stipata',
  'Juncus balticus','Juncus effusus','Juncus ensifolius','Juncus patens',
  'Luzula parviflora','Scirpus acutus','Scirpus microcarpus','Typha latifolia',
]);
const GRASS_LATINS = new Set([
  'Deschampsia caespitosa','Elymus glaucus','Hordeum brachyantherum','Koeleria macrantha',
]);
function pdfPageForNative(p) {
  if (p.t === 'Large Tree') {
    const evergreens = new Set(['Grand Fir','Ponderosa Pine','Douglas-fir','Pacific Yew','Western Red Cedar','Western Hemlock']);
    return evergreens.has(p.c) ? {page:67,section:'Section 3.1 — Evergreen Trees'} : {page:71,section:'Section 3.2 — Deciduous Trees'};
  }
  if (p.t === 'Small Tree')           return {page:82,  section:'Section 3.6 — Arborescent Shrubs'};
  if (p.t === 'Large Shrub')          return {page:87,  section:'Section 3.8 — Shrubs'};
  if (p.t === 'Small/Medium Shrub')   return {page:87,  section:'Section 3.8 — Shrubs'};
  if (p.t === 'Fern')                 return {page:112, section:'Section 3.13 — Herbaceous Ferns'};
  if (p.t === 'Ground Cover') {
    if (SEDGE_RUSH_LATINS.has(p.l))   return {page:110, section:'Section 3.12 — Sedges & Rushes'};
    if (GRASS_LATINS.has(p.l))        return {page:108, section:'Section 3.11 — Herbaceous Grasses'};
    return                                   {page:102, section:'Section 3.10 — Herbaceous Forbs'};
  }
  return {page:1, section:'Portland Plant List'};
}
function pdfPageForNuisance(p) {
  return p.r === 'E'
    ? {page:174, section:'Section 4 — Required Eradication List'}
    : {page:164, section:'Section 4 — Nuisance Plants List'};
}

// ── HELPERS ────────────────────────────────────────────────────────────────
function norm(s) { return s.toLowerCase().replace(/[^a-z0-9]/g,' ').replace(/\s+/g,' ').trim(); }
function score(c,l,q) {
  if (!q) return 1;
  const qn=norm(q), cn=norm(c), ln=norm(l);
  if (cn===qn||ln===qn) return 100;
  if (cn.startsWith(qn)||ln.startsWith(qn)) return 80;
  if (cn.includes(qn)||ln.includes(qn)) return 60;
  const hits = qn.split(' ').filter(Boolean).filter(w=>cn.includes(w)||ln.includes(w)).length;
  return hits ? 20+hits*10 : 0;
}
function sunBadge(s) {
  if (s==='Full Sun')   return `<span class="badge badge-sun">☀ Full sun</span>`;
  if (s==='Part Shade') return `<span class="badge badge-part">◑ Part shade</span>`;
  return                       `<span class="badge badge-shade">◗ Full shade</span>`;
}
function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ── SCROLL TO SEARCH ON FOCUS ──────────────────────────────────────────────
function scrollToSearch(inputId) {
  // Small delay lets iOS finish its own scroll-to-cursor behaviour first
  setTimeout(() => {
    const el = document.getElementById(inputId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 80);
}

// ── RENDER NATIVE ──────────────────────────────────────────────────────────
function renderNative() {
  const q = document.getElementById('nativeSearch').value.trim();
  let res = NATIVE.map((p,i)=>({p,i,s:score(p.c,p.l,q)}));
  if (q) res = res.filter(r=>r.s>0);
  res.sort((a,b)=>b.s-a.s);
  if (nativeSun!=='all') res = res.filter(r=>r.p.sun.includes(nativeSun));
  if (nativeType) res = res.filter(r=>r.p.t===nativeType);
  const meta = document.getElementById('nativeMeta');
  const cont = document.getElementById('nativeResults');
  if (!res.length) {
    meta.textContent='';
    cont.innerHTML=`<div class="no-results"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22V12m0 0C12 7 7 4 3 5c0 5 4 8 9 7m0 0c0-5 5-8 9-7-1 5-5 8-9 7"/></svg><p>No plants found. Try adjusting your search or filters.</p></div>`;
    return;
  }
  meta.textContent = q ? `${res.length} match${res.length!==1?'es':''} for "${q}"` : `Showing ${res.length} of 188 native plants`;
  cont.innerHTML = res.map(({p,i})=>{
    const exp = nativeExp===i;
    return `<div class="plant-card${exp?' expanded':''}" onclick="toggleNative(${i})">
      <div class="card-header">
        <div class="card-names">
          <div class="common-name">${esc(p.c)}</div>
          <div class="latin-name">${esc(p.l)}</div>
        </div>
        <div class="card-right">
          <span class="badge badge-type">${esc(p.t)}</span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      ${exp ? `<div class="card-details">
        <div class="detail-grid">
          <div><div class="detail-label">Moisture</div><div class="detail-value">${esc(p.m)}</div></div>
          <div><div class="detail-label">Plant type</div><div class="detail-value">${esc(p.t)}</div></div>
          <div style="grid-column:1/-1"><div class="detail-label">Light conditions</div><div class="sun-tags">${p.sun.map(sunBadge).join('')}</div></div>
        </div>
        <p class="pdf-link">${(()=>{const {page,section}=pdfPageForNative(p);return `${esc(section)} &middot; <a href="${PDF_BASE}#page=${page}" target="_blank">Open in PDF (p.\u00a0${page}) &#8599;</a>`;})()}</p>
      </div>` : ''}
    </div>`;
  }).join('');
}
function toggleNative(i) { nativeExp = nativeExp===i?null:i; renderNative(); }

// ── RENDER NUISANCE ────────────────────────────────────────────────────────
function renderNuisance() {
  const q = document.getElementById('nuisanceSearch').value.trim();
  let res = NUISANCE.map((p,i)=>({p,i,s:score(p.c,p.l,q)}));
  if (q) res = res.filter(r=>r.s>0);
  res.sort((a,b)=>{
    if (b.s!==a.s) return b.s-a.s;
    return ['E','A','B','C','D','W'].indexOf(a.p.r) - ['E','A','B','C','D','W'].indexOf(b.p.r);
  });
  if (nuisanceRank!=='all') res = res.filter(r=>r.p.r===nuisanceRank);
  const meta = document.getElementById('nuisanceMeta');
  const cont = document.getElementById('nuisanceResults');
  if (!res.length) {
    meta.textContent='';
    cont.innerHTML=`<div class="no-results"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><p>No nuisance plants found.</p></div>`;
    return;
  }
  meta.textContent = q ? `${res.length} match${res.length!==1?'es':''} for "${q}"` : `Showing ${res.length} nuisance plants`;
  cont.innerHTML = res.map(({p,i})=>{
    const exp = nuisanceExp===i;
    const rLabel = p.r==='E' ? 'Req. Eradication' : p.r;
    return `<div class="plant-card${exp?' expanded':''}" onclick="toggleNuisance(${i})">
      <div class="card-header">
        <div class="card-names">
          <div class="common-name">${esc(p.c)}</div>
          <div class="latin-name">${esc(p.l)}</div>
        </div>
        <div class="card-right">
          <span class="rank-badge rank-${p.r}">${rLabel}</span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      ${exp ? `<div class="card-details">
        <div class="detail-grid">
          <div><div class="detail-label">Category</div><div class="detail-value">${esc(p.cat)}</div></div>
          <div><div class="detail-label">Rank</div><div class="detail-value">${RANK_LABELS[p.r]}</div></div>
        </div>
        <p class="note-text">${esc(p.note)}</p>
        <div class="rank-explainer rank-${p.r}">
          <div class="rank-explainer-title">${RANK_LABELS[p.r]}</div>
          <div class="rank-explainer-desc">${RANK_DESC[p.r]}</div>
        </div>
        <p class="pdf-link">${(()=>{const {page,section}=pdfPageForNuisance(p);return `${esc(section)} &middot; <a href="${PDF_BASE}#page=${page}" target="_blank">Open in PDF (p.\u00a0${page}) &#8599;</a>`;})()}</p>
      </div>` : ''}
    </div>`;
  }).join('');
}
function toggleNuisance(i) { nuisanceExp = nuisanceExp===i?null:i; renderNuisance(); }

// ── TAB SWITCHING ──────────────────────────────────────────────────────────
function switchTab(tab, btn) {
  activeTab = tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('native-panel').style.display   = tab==='native'   ? '' : 'none';
  document.getElementById('nuisance-panel').style.display = tab==='nuisance' ? '' : 'none';
}

// ── FILTER WIRING ──────────────────────────────────────────────────────────
document.querySelectorAll('#nativeFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.filter !== undefined) {
      document.querySelectorAll('#nativeFilters [data-filter]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      nativeSun = btn.dataset.filter;
    } else if (btn.dataset.type !== undefined) {
      if (btn.classList.contains('active')) { btn.classList.remove('active'); nativeType = null; }
      else {
        document.querySelectorAll('#nativeFilters [data-type]').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active'); nativeType = btn.dataset.type;
      }
    }
    nativeExp = null; renderNative();
  });
});

document.querySelectorAll('#nuisanceFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#nuisanceFilters .filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    nuisanceRank = btn.dataset.rank;
    nuisanceExp = null; renderNuisance();
  });
});

// ── FOCUS: scroll search bar to top of viewport ────────────────────────────
document.getElementById('nativeSearch').addEventListener('focus',   () => scrollToSearch('nativeSearch'));
document.getElementById('nuisanceSearch').addEventListener('focus', () => scrollToSearch('nuisanceSearch'));

// ── INIT ───────────────────────────────────────────────────────────────────
renderNative();
renderNuisance();

