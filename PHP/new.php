<?php
$con = mysqli_connect("localhost","root","","skysand");
if(!$con){
    die("Error : Database not connected! ");

}
else{
    echo "Successful connection";
}

$name = array("Serena Hotel","Sheltons Ambassador","Chalet Hotel","Luxus Hotel", "Residency Hotel",
"Royal Swiss Hotel","Shangrila Resort","Opulent Resort","Aloche Apartments","Taj Palace Hotel",
"Radisson Blu Plaza","Hotel Airport City","JW Marriot Hotel","Service Appartments","ITC Royal Bengal Hotel",
"Oberoi Cecil","Curve Villa","Club Mahindra Mashobra","Arlo Soho","Millenium Hilton","Standard High Line",
"Sheraton Grand","Oceana Hotel","The Westine Bonaventure Hotel","InterContinental Boston","Omni Boston Hotel",
"Sheraton Boston Hotel","Absolute Pleasure Yacht","Maitrise Hotel Maida Vale","Canary Wharf Studios",
"Malmaison Birmingham","Hotel Garden Inn","Jurys Inn","Hotel Gotham","Stock Exchange Hotel","The Midland",
"Four Seasons Hotel","The Urban Newtown","Vibe Hotel","W Melbourne","The Langham","Rendezvous Hotel",
"Oval Hotel","Arkaba Hotel","Buxton Manor","Old Mill","Fairmont Royal York","The BroadView Hotel",
"Sofitel Montreal Golden Mile","Hotel Birks","Hotel William Gray","Hotel Blu Vancouver","Pan Pacific",
"Hyatt Regency","Banyan Tree","Don Muang Hotel","Ibis Bangkok Sathorn","The Base Uptown By Favstay",
"Kamala Heights","Le Meridien Phuket Beach Resorts","The Haven","Deevana Plaza","Baan Manu Chang",
"Pera Palace Hotel","Barcelo Istanbul","Cirrus Tomtom","Tav Airport Hotel","Olimpiyat Otel",
"Kozan City Hotel","Akra Hotel","Crowne Plaza","Flamingo Residence");


$city = array("Islamabad","Islamabad","Islamabad","Lahore","Lahore","Lahore","Murree","Murree"
,"Murree","New Delhi","New Delhi","New Delhi","Kolkata","Kolkata","Kolkata","Himachal Pradesh",
"Himachal Pradesh","Himachal Pradesh","New York City","New York City","New York City","Los Angeles",
"Los Angeles","Los Angeles","Boston","Boston","Boston","London","London","London","Birmingham",
"Birmingham","Birmingham","Manchester","Manchester","Manchester","Sydney","Sydney","Sydney",
"Melbourne","Melbourne","Melbourne","Adelaide","Adelaide","Adelaide","Toronto","Toronto","Toronto",
"Montreal","Montreal","Montreal","Vancouver","Vancouver","Vancouver","Bangkok","Bangkok","Bangkok",
"Phuket","Phuket","Phuket","Krabi","Krabi","Krabi","Istanbul","Istanbul","Istanbul",
"Izmir","Izmir","Izmir","Antalya","Antalya","Antalya",);


$country = array("Pakistan","Pakistan","Pakistan","Pakistan","Pakistan","Pakistan","Pakistan","Pakistan",
"Pakistan","India","India","India","India","India","India","India","India","India",
"United States of America","United States of America","United States of America","United States 
of America","United States of America","United States of America","United States of America",
"United States of America","United States of America","United Kingdom","United Kingdom"
,"United Kingdom","United Kingdom","United Kingdom","United Kingdom","United Kingdom"
,"United Kingdom","United Kingdom","Australia","Australia","Australia","Australia",
"Australia","Australia","Australia","Australia","Australia","Canada","Canada","Canada","Canada",
"Canada","Canada","Canada","Canada","Canada","Thailand","Thailand","Thailand","Thailand","Thailand"
,"Thailand","Thailand","Thailand","Thailand","Turkey","Turkey","Turkey","Turkey","Turkey",
"Turkey","Turkey","Turkey","Turkey");

$contact = array("(051) 111 133 133","0336 6111169","(051) 8731651","0320 1999955","(042) 111 395 395",
"(042) 111 000 329","0300 5002719","0311 1788999","0303 5330666","+1 866-238-8235","+91 11 2677 9191",
"+91 11 4652 8000","+91 33 6633 0000","+91 98301 85080","+91 33 4446 4646","+91 177 280 4848","+91 98881 88228",
"+91 1860 210 1111","+1 212-342-7000","+1 212-693-2001","+1 212-645-4646","+1 213-488-3500","+1 800-777-0758",
"+1 213-624-1000","+1 617-747-1000","+1 844-951-3505","+1 617-236-2000","+44 191 232 8343","+44 20 7625 8532",
"+44 20 8038 8045","+44 121 794 3004","+44 121 643 1003","+44 121 606 9000","+44 161 413 0000","+44 161 470 3901",
"+44 161 236 3333","+61 2 9250 3100","+61 2 8960 7800","+61 2 8272 3300","+61 3 9113 8800","+61 3 8696 8888",
"+61 3 9250 1888","+61 8 8368 9900","+61 8 8338 1100","+61 8 8267 2020","+1 416-232-3703","+1 416-368-2511",
"+1 416-362-8439","+1 514-285-9000","+1 514-370-3000","+1 514-656-5600","+1 604-620-6200","+1 604-662-8111",
"+1 604-683-1234","+66 2 679 1200","+66 99 116 6365","+66 2 659 2888","+66 2 027 7888","+66 98 376 9322",
"+66 76 370 100","+66 90 964 6495", "+66 75 639 999","+66 75 695 633","+90 212 377 40 00",
"+90 212 377 45 45","+90 212 243 91 61","+90 232 273 73 03","+90 232 425 12 69","+90 232 446 57 44",
"+90 242 310 99 99","+90 242 228 77 18","+90 530 860 25 81");

$price = array("$300","$62","$67","$55","$52","$89","$95","$86","$76","$113","$95","$20","$119","$45",
"$145","$210","$89","$189","$324","$304","$541","$249","$83","$230","$399","$256","$259","$244","$91","$145",
"$125","$108","$98","$184","$245","$145","$288","$148","$169","$314","$297","$155","$180","$138",
"$198","$175","$253","$225","$158","$314","$210","$145","$222","$190","$107","$15","$178","$45","$413",
"$125","$149","$18","$118","$175","$135","$33","$52","$21","$30","$147","$79","$40");

$link = array("https://www.serenahotels.com","https://shelton-s-ambassador-islamabad.booked.net/",
"https://www.schaletislamabad.com/en/","https://www.luxusgrandhotel.com/","https://rh.com.pk/","http://royalswisshotels.com/lahore-pakistan",
"https://shangrila.pk/","https://the-opulent-resort-and-conference-venue-bhurban.booked.net/","https://alocheapartments.com.pk/",
"https://www.guestreservations.com/taj-palace-hotel/booking?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf-BzngOnzvjerwKCnNZbuFea7a92DqX29iiJN1e3a_-Ymjw339jHxBoCnLwQAvD_BwE",
"https://www.radissonhotels.com/en-us/destination/india/new-delhi?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf7O-8Q3EnzEq2AsIAsE6CoA_SWoQlv8m1dS2paMOAvbJc5MbtjNIyBoCdx8QAvD_BwE&gclsrc=aw.ds",
"http://www.hotelairportcity.in/","https://www.marriott.com/en-us/hotels/ccujw-jw-marriott-hotel-kolkata/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2",
"https://www.booking.com/hotel/in/service-apartment-park-street-calcutta.en-gb.html","https://www.marriott.com/en-us/hotels/cculr-itc-royal-bengal-a-luxury-collection-hotel-kolkata/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTI3ODU2NDgtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
"https://www.oberoihotels.com/hotels-in-shimla-cecil/?utm_source=GMBlisting&utm_medium=organic","https://www.facebook.com/Curvevilla/",
"https://www.clubmahindra.com/our-resorts/club-mahindra-mashobra-resort-in-himachal-pradesh?utm_source=google&utm_medium=maps&utm_campaign=Club-Mahindra-Resorts-Mashobra-Shimla-Himachal-Pradesh",
"https://www.arlohotels.com/arlo-soho/?utm_source=local-listings&utm_medium=organic&utm_campaign=yext-soho",
"https://www.millenniumhotels.com/en/new-york/millennium-downtown-new-york/","https://www.standardhotels.com/new-york/properties/high-line?utm_source=google&utm_campaign=google_my_business&utm_medium=organic",
"https://www.marriott.com/en-us/hotels/laxgr-sheraton-grand-los-angeles/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjY2OS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
"https://www.hoteloceanasantamonica.com/?SEO_id=GMB-AMER-OL-SMOOLOL&y_source=1_MTk1MzU0OTQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
"https://www.marriott.com/en-us/hotels/laxbw-the-westin-bonaventure-hotel-and-suites-los-angeles/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjY3MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
"https://www.ihg.com/intercontinental/hotels/us/en/boston/bosha/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-US-_-BOSHA",
"https://www.bookonline.com/hotel/boston-omni-parker-house-hotel?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf0KAyd0lpkvDfagcefV5-ysFQAeOFWzmbz7fuEVbUIFddf43q_1QFRoCo-AQAvD_BwE#room-types",
"https://www.marriott.com/en-us/hotels/bosbo-sheraton-boston-hotel/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjg4NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
"https://www.absolutepleasureyacht.com/","https://www.maitrisehotel.co.uk/.well-known/captcha/","https://www.thisisvertus.com/?utm_source=Google&utm_medium=CPC&utm_campaign=Vertus%20-%20Brand%20PPC&utm_content=Brand&utm_term=studio%20canary%20wharf&utm_campaign=Brand+%26+Competitor+PPC&utm_source=adwords&utm_medium=ppc&hsa_acc=9791348547&hsa_cam=6809308045&hsa_grp=81196869578&hsa_ad=593185712831&hsa_src=g&hsa_tgt=kwd-356204402097&hsa_kw=studio%20canary%20wharf&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwu_mSBhAYEiwA5BBmfxATeYdsGb2STqzwlwrXKP3LvclQ2sAXAA0UMNGScT9RDh_25viRjRoCRUsQAvD_BwE",
"https://www.malmaison.com/locations/birmingham/?utm_source=google&utm_medium=organic&utm_campaign=birmingham-gmb",
"https://www.hilton.com/en/hotels/bhxbpgi-hilton-garden-inn-birmingham-brindleyplace/?SEO_id=GMB-EMEA-GI-BHXBPGI",
"https://www.jurysinns.com/hotels/birmingham/?utm_source=google&utm_medium=local",
"https://www.hotelgotham.co.uk/","https://stockexchangehotel.co.uk/","https://www.themidlandhotel.co.uk/?utm_source=google&utm_medium=local",
"https://www.fourseasons.com/sydney/?seo=google_local_syd1_apac","https://www.theurbannewtown.com.au/",
"https://vibehotels.com/book-accommodation/sydney/hotel-sydney/?utm_source=googleplaces&utm_medium=organic&utm_campaign=googleplaces&utm_content=vibe-sydney",
"https://www.marriott.com/en-us/hotels/melwh-w-melbourne/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTMxNDYyMzAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
"https://www.langhamhotels.com/en/the-langham/melbourne","https://rendezvousmelbourne.com.au/?utm_source=googleplaces&utm_medium=organic&utm_campaign=googleplaces&utm_content=rendezvous-melbourne",
"http://www.ovalhotel.com.au/","https://www.arkabahotel.com.au/","https://www.adelaideheritage.com/",
"https://oldmilltorontohotel.com/","https://www.fairmont.com/royal-york-toronto/?goto=fiche_hotel&code_hotel=A551&merchantid=seo-maps-CA-A551&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjE0MTEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
"https://www.thebroadviewhotel.ca/","https://all.accor.com/hotel/3646/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
"https://hotelbirksmontreal.com/","https://hotelwilliamgray.com/.well-known/captcha/","https://www.hotelbluvancouver.com/",
"https://www.panpacific.com/en/hotels-and-resorts/pp-vancouver.html?utm_source=google&utm_medium=business_listing&utm_campaign=googlemybusiness",
"https://www.hyatt.com/en-US/hotel/canada/hyatt-regency-vancouver/yvrrv?src=corp_lclb_gmb_seo_yvrrv",
"https://www.banyantree.com/thailand/bangkok","https://www.donmuanghotel.com/","https://all.accor.com/errors/session-expired/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
"https://www.sansiri.com/condominium/thebase-uptown-phuket/th/","https://phoalard.net/4/1407888/?var=2579905&ab2r=0&prfrev=false",
"https://www.marriott.com/en-us/hotels/hktmd-le-meridien-phuket-beach-resort/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_Mjg2OTgzMi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
"https://www.thehavenkrabi.com/","http://www.deevanaplazakrabi.com/","https://www.krabivillas.com/en/villas/baan-manu-chang",
"https://perapalace.com/","https://www.barcelo.com/en-gb/barcelo-istanbul/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=7386",
"https://www.cirrustomtom.com/","https://www.tavairporthotels.com.tr/","https://www.olimpiyatotelizmir.com/",
"https://kozancityhotel.com/","https://www.akrahotels.com/","https://www.ihg.com/crowneplaza/hotels/gb/en/antalya/aytya/hoteldetail?cm_mmc=GoogleMaps-_-CP-_-TR-_-AYTYA",
"http://flamingo-residence.allantalyahotels.org/en//");

$id = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,
34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,
50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72);

foreach($id as $new){
    $new1 = $name[$new-1];
    $new2 = $contact[$new-1];
    $new3 = $country[$new-1];
    $new4 = $city[$new-1];
    $new5 = $price[$new-1];
    $new6 = $link[$new-1];
    echo $new;
    echo $new1;
    echo $new2;
    echo $new3;
    echo $new4;
    echo $new5;
    echo $new6;
    $sql = "INSERT INTO hoteldb(id,country,city,contact,name,price_per_night,link) VALUES ('$new','$new3','$new4','$new2','$new1','$new5','$new6')";
    mysqli_query($con,$sql);

}


?>