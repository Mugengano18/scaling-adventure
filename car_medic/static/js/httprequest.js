//let city_field = document.getElementById("inputCity");
//let district_field = document.getElementById("inputDistrict")
//let sector_field = document.getElementById("inputSector");
//let cell_field = document.getElementById("inputCell");
//var pair=[];
//
//console.log(city_field)
//const options = {
//  method: "GET",
//  headers: {
//    "X-RapidAPI-Key": "3a85e2a9femshc75f599f0f8d052p1cdebajsn8b711f561255",
//    "X-RapidAPI-Host": "rwanda.p.rapidapi.com",
//  },
//};
//
//fetch("https://rwanda.p.rapidapi.com/provinces", options)
//  .then((response) => response.json())
//  .then((response) => {
//    let data_all = response.data;
//    for (var province in data_all) {
//      pair = data_all[province];
//      console.log(pair)
//      city_field.innerHTML += `<option value = "${pair}">${pair}</option>`
//    }
//  })
//  .catch((err) => console.error(err));
//
//
//
//
//function populate(s1, s2) {
//  district_field.innerHTML="";
//  var s1 = document.getElementById(s1);
//  var s2 = document.getElementById(s2);
//
//  s2.innerHtML = "";
//
//
//  fetch(`https://rwanda.p.rapidapi.com/districts?p=${s1.value}`, options)
//  .then((response) => response)
//  .then((response) => {
//    let data_all = response.data;
//    console.log(data_all)
//    for (var province in data_all) {
//      pair = data_all[province];
//      district_field.innerHTML += `<option value = "${pair}">${pair}</option>`
//    }
//  })
//  .catch((err) => console.error(err));
//
//}
//
//function populateSector(province,district) {
//  sector_field.innerHTML="";
//
//  var s1 = document.getElementById(province);
//  var s2 = document.getElementById(district);
//
//
//  s2.innerHtML = "";
//
//
//  fetch(`https://rwanda.p.rapidapi.com/sectors?p=${s1.value}&d=${s2.value}`, options)
//  .then((response) => response.json())
//  .then((response) => {
//    let data_all = response.data;
//    console.log(data_all)
//    for (var province in data_all) {
//      pair = data_all[province];
//      console.log(pair)
//      inputSector.innerHTML += `<option value = "${pair}">${pair}</option>`
//    }
//  })
//  .catch((err) => console.error(err));
//
//}
//

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



var locationObject = {
            "East": {
                "Bugesera": [
                    'Gashora', 'Juru',
                    'Kamabuye', 'Mareba',
                    'Mayange', 'Musenyi',
                    'Mwogo', 'Ngeruka',
                    'Ntarama', 'Nyamata',
                    'Nyarugenge', 'Rilima',
                    'Ruhuha', 'Rweru',
                    'Shyara'
                ],
                "Gatsibo": [
                    'Gasange', 'Gatsibo',
                    'Gitoki', 'Kabarore',
                    'Kageyo', 'Kiramuruzi',
                    'Kiziguro', 'Muhura',
                    'Murambi', 'Ngarama',
                    'Nyagihanga', 'Remera',
                    'Rugarama', 'Rwimbogo'
                ],
                "Kayonza": [
                    'Gahini', 'Kabare',
                    'Kabarondo', 'Mukarange',
                    'Murama', 'Murundi',
                    'Mwiri', 'Ndego',
                    'Nyamirama', 'Rukara',
                    'Ruramira', 'Rwinkwavu'
                ],
                "Kirehe": [
                    'Gahara', 'Gatore',
                    'Kigarama', 'Kigina',
                    'Kirehe', 'Mahama',
                    'Mpanga', 'Musaza',
                    'Mushikiri', 'Nasho',
                    'Nyamugari', 'Nyarubuye'
                ],
                "Ngoma": [
                    'Gashanda', 'Jarama',
                    'Karembo', 'Kazo',
                    'Kibungo', 'Mugesera',
                    'Murama', 'Mutenderi',
                    'Remera', 'Rukira',
                    'Rukumberi', 'Rurenge',
                    'Sake', 'Zaza'
                ],
                "Nyagatare": [
                    'Gatunda', 'Karama',
                    'Karangazi', 'Katabagemu',
                    'Kiyombe', 'Matimba',
                    'Mimuri', 'Mukama',
                    'Musheri', 'Nyagatare',
                    'Rukomo', 'Rwempasha',
                    'Rwimiyaga', 'Tabagwe'
                ],
                "Rwamagana": [
                    'Fumbwe', 'Gahengeri',
                    'Gishali', 'Karenge',
                    'Kigabiro', 'Muhazi',
                    'Munyaga', 'Munyiginya',
                    'Musha', 'Muyumbu',
                    'Mwulire', 'Nyakaliro',
                    'Nzige', 'Rubona'
                ]
            },
            "Kigali": {
                "Gasabo": [
                    'Bumbogo', 'Gatsata',
                    'Gikomero', 'Gisozi',
                    'Jabana', 'Jali',
                    'Kacyiru', 'Kimihurura',
                    'Kimironko', 'Kinyinya',
                    'Ndera', 'Nduba',
                    'Remera', 'Rusororo',
                    'Rutunga'
                ],
                "Kicukiro": [
                    'Gahanga', 'Gatenga',
                    'Gikondo', 'Kagarama',
                    'Kanombe', 'Kicukiro',
                    'Kigarama', 'Masaka',
                    'Niboye', 'Nyarugunga'
                ],
                "Nyarugenge": [
                    'Gitega', 'Kanyinya',
                    'Kigali', 'Kimisagara',
                    'Mageregere', 'Muhima',
                    'Nyakabanda', 'Nyamirambo',
                    'Nyarugenge', 'Rwezamenyo'
                ]
            },
            "North": {
                "Burera": [
                    'Bungwe', 'Butaro',
                    'Cyanika', 'Cyeru',
                    'Gahunga', 'Gatebe',
                    'Gitovu', 'Kagogo',
                    'Kinoni', 'Kinyababa',
                    'Kivuye', 'Nemba',
                    'Rugarama', 'Rugengabari',
                    'Ruhunde', 'Rusarabuye',
                    'Rwerere'
                ],
                "Gakenke": [
                    'Busengo', 'Coko',
                    'Cyabingo', 'Gakenke',
                    'Gashenyi', 'Janja',
                    'Kamubuga', 'Karambo',
                    'Kivuruga', 'Mataba',
                    'Minazi', 'Mugunga',
                    'Muhondo', 'Muyongwe',
                    'Muzo', 'Nemba',
                    'Ruli', 'Rusasa',
                    'Rushashi'
                ],
                "Gicumbi": [
                    'Bukure', 'Bwisige',
                    'Byumba', 'Cyumba',
                    'Giti', 'Kageyo',
                    'Kaniga', 'Manyagiro',
                    'Miyove', 'Mukarange',
                    'Muko', 'Mutete',
                    'Nyamiyaga', 'Nyankenke',
                    'Rubaya', 'Rukomo',
                    'Rushaki', 'Rutare',
                    'Ruvune', 'Rwamiko',
                    'Shangasha'
                ],
                "Musanze": [
                    'Busogo', 'Cyuve',
                    'Gacaca', 'Gashaki',
                    'Gataraga', 'Kimonyi',
                    'Kinigi', 'Muhoza',
                    'Muko', 'Musanze',
                    'Nkotsi', 'Nyange',
                    'Remera', 'Rwaza',
                    'Shingiro'
                ],
                "Rulindo": [
                    'Base', 'Burega',
                    'Bushoki', 'Buyoga',
                    'Cyinzuzi', 'Cyungo',
                    'Kinihira', 'Kisaro',
                    'Masoro', 'Mbogo',
                    'Murambi', 'Ngoma',
                    'Ntarabana', 'Rukozo',
                    'Rusiga', 'Shyorongi',
                    'Tumba'
                ]
            },
            "South": {
                "Gisagara": [
                    'Gikonko', 'Gishubi',
                    'Kansi', 'Kibirizi',
                    'Kigembe', 'Mamba',
                    'Muganza', 'Mugombwa',
                    'Mukindo', 'Musha',
                    'Ndora', 'Nyanza',
                    'Save'
                ],
                "Kamonyi": [
                    'Gacurabwenge', 'Karama',
                    'Kayenzi', 'Kayumbu',
                    'Mugina', 'Musambira',
                    'Ngamba', 'Nyamiyaga',
                    'Nyarubaka', 'Rugarika',
                    'Rukoma', 'Runda'
                ],
                "Nyamagabe": [
                    'Buruhukiro', 'Cyanika',
                    'Gasaka', 'Gatare',
                    'Kaduha', 'Kamegeri',
                    'Kibirizi', 'Kibumbwe',
                    'Kitabi', 'Mbazi',
                    'Mugano', 'Musange',
                    'Musebeya', 'Mushubi',
                    'Nkomane', 'Tare',
                    'Uwinkingi'
                ],
                "Nyaruguru": [
                    'Busanze', 'Cyahinda',
                    'Kibeho', 'Kivu',
                    'Mata', 'Muganza',
                    'Munini', 'Ngera',
                    'Ngoma', 'Nyabimata',
                    'Nyagisozi', 'Ruheru',
                    'Ruramba', 'Rusenge'
                ],
                "Huye": [
                    'Gishamvu', 'Huye',
                    'Karama', 'Kigoma',
                    'Kinazi', 'Maraba',
                    'Mbazi', 'Mukura',
                    'Ngoma', 'Ruhashya',
                    'Rusatira', 'Rwaniro',
                    'Simbi', 'Tumba'
                ],
                "Muhanga": [
                    'Cyeza', 'Kabacuzi',
                    'Kibangu', 'Kiyumba',
                    'Muhanga', 'Mushishiro',
                    'Nyabinoni', 'Nyamabuye',
                    'Nyarusange', 'Rongi',
                    'Rugendabari', 'Shyogwe'
                ],
                "Nyanza": [
                    'Busasamana', 'Busoro',
                    'Cyabakamyi', 'Kibilizi',
                    'Kigoma', 'Mukingo',
                    'Muyira', 'Ntyazo',
                    'Nyagisozi', 'Rwabicuma'
                ],
                "Ruhango": [
                    'Bweramana', 'Byimana',
                    'Kabagali', 'Kinazi',
                    'Kinihira', 'Mbuye',
                    'Mwendo', 'Ntongwe',
                    'Ruhango'
                ],
            },
            "West": {
                "Karongi": [
                    'Bwishyura', 'Gashari',
                    'Gishyita', 'Gitesi',
                    'Mubuga', 'Murambi',
                    'Murundi', 'Mutuntu',
                    'Rubengera', 'Rugabano',
                    'Ruganda', 'Rwankuba',
                    'Twumba'
                ],
                "Ngororero": [
                    'Bwira', 'Gatumba',
                    'Hindiro', 'Kabaya',
                    'Kageyo', 'Kavumu',
                    'Matyazo', 'Muhanda',
                    'Muhororo', 'Ndaro',
                    'Ngororero', 'Nyange',
                    'Sovu'
                ],
                "Nyabihu": [
                    'Bigogwe', 'Jenda',
                    'Jomba', 'Kabatwa',
                    'Karago', 'Kintobo',
                    'Mukamira', 'Muringa',
                    'Rambura', 'Rugera',
                    'Rurembo', 'Shyira'
                ],
                "Nyamasheke": [
                    'Bushekeri', 'Bushenge',
                    'Cyato', 'Gihombo',
                    'Kagano', 'Kanjongo',
                    'Karambi', 'Karengera',
                    'Kirimbi', 'Macuba',
                    'Mahembe', 'Nyabitekeri',
                    'Rangiro', 'Ruharambuga',
                    'Shangi'
                ],
                "Rubavu": [
                    'Bugeshi', 'Busasamana',
                    'Cyanzarwe', 'Gisenyi',
                    'Kanama', 'Kanzenze',
                    'Mudende', 'Nyakiriba',
                    'Nyamyumba', 'Nyundo',
                    'Rubavu', 'Rugerero'
                ],
                "Rutsiro": [
                    'Boneza', 'Gihango',
                    'Kigeyo', 'Kivumu',
                    'Manihira', 'Mukura',
                    'Murunda', 'Musasa',
                    'Mushonyi', 'Mushubati',
                    'Nyabirasi', 'Ruhango',
                    'Rusebeya'
                ],
                "Rusizi": [
                    'Bugarama', 'Butare',
                    'Bweyeye', 'Gashonga',
                    'Giheke', 'Gihundwe',
                    'Gikundamvura', 'Gitambi',
                    'Kamembe', 'Muganza',
                    'Mururu', 'Nkanka',
                    'Nkombo', 'Nkungu',
                    'Nyakabuye', 'Nyakarenzo',
                    'Nzahaha', 'Rwimbogo'
                ],
            }
        }
        window.onload = function () {
            var citySel = document.getElementById("inputCity");
            var districtSel = document.getElementById("inputDistrict");
            var sectorSel = document.getElementById("inputSector");
            for (var x in locationObject) {
                citySel.options[citySel.options.length] = new Option(x, x);
            }
            citySel.onchange = function () {
                //empty Chapters- and Topics- dropdowns
                sectorSel.length = 1;
                districtSel.length = 1;
                //display correct values
                for (var y in locationObject[this.value]) {
                    districtSel.options[districtSel.options.length] = new Option(y, y);
                }
            }
            districtSel.onchange = function () {
                //empty Chapters dropdown
                sectorSel.length = 1;
                //display correct values
                var z = locationObject[citySel.value][this.value];
                for (var i = 0; i < z.length; i++) {
                    sectorSel.options[sectorSel.options.length] = new Option(z[i], z[i]);
                }
            }
        }
