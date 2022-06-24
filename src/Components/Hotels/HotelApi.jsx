import {useState} from 'react';
import axios from "axios";
const Data = [
    {
        id: 1,
        country: "Pakistan",
        city: "Islamabad",
        contact: "(051) 111 133 133",
        name: "Serena Hotel",
        price_per_night: "$300",
        ref: "https://www.serenahotels.com",
        img: '../images/1.jpg'
    },
    {
        id: 2,
        country: "Pakistan",
        city: "Islamabad",
        contact: "0336 6111169",
        name: "Sheltons Ambassador",
        price_per_night: "$62",
        ref: "https://shelton-s-ambassador-islamabad.booked.net/",
        img: '../images/2.jpg'
    },
    {
        id: 3,
        country: "Pakistan",
        city: "Islamabad",
        contact: "(051) 8731651",
        name: "Chalet Hotel",
        price_per_night: "$67",
        ref: "https://www.schaletislamabad.com/en/",
        img: '../images/3.jpg'
    },
    {
        id: 4,
        country: "Pakistan",
        city: "Lahore",
        contact: "0320 1999955",
        name: "Luxus Hotel",
        price_per_night: "$55",
        ref: "https://www.luxusgrandhotel.com/",
        img: '../images/4.jpg'
    },
    {
        id: 5,
        country: "Pakistan",
        city: "Lahore",
        contact: "(042) 111 395 395",
        name: "Residency Hotel",
        price_per_night: "$52",
        ref: "https://rh.com.pk/",
        img: '../images/5.jpg'
    },
    {
        id: 6,
        country: "Pakistan",
        city: "Lahore",
        contact: "(042) 111 000 329",
        name: "Royal Swiss Hotel",
        price_per_night: "$89",
        ref: "http://royalswisshotels.com/lahore-pakistan",
        img: '../images/6.jpg'
    },
    {
        id: 7,
        country: "Pakistan",
        city: "Murree",
        contact: "0300 5002719",
        name: "Shangrila Resort",
        price_per_night: "$95",
        ref: "https://shangrila.pk/",
        img: '../images/7.jpg'
    },
    {
        id: 8,
        country: "Pakistan",
        city: "Murree",
        contact: "0311 1788999",
        name: "Opulent Resort",
        price_per_night: "$86",
        ref: "https://the-opulent-resort-and-conference-venue-bhurban.booked.net/",
        img: '../images/8.jpg'
    },
    {
        id: 9,
        country: "Pakistan",
        city: "Murree",
        contact: "0303 5330666",
        name: "Aloche Apartments",
        price_per_night: "$86",
        ref: "https://alocheapartments.com.pk/",
        img: '../images/9.jpg'
    },
    {
        id: 10,
        country: "India",
        city: "New Delhi",
        contact: "+1 866-238-8235",
        name: "Radisson Blu Plaza",
        price_per_night: "$113",
        ref: "https://www.guestreservations.com/taj-palace-hotel/booking?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf-BzngOnzvjerwKCnNZbuFea7a92DqX29iiJN1e3a_-Ymjw339jHxBoCnLwQAvD_BwE",
        img: '../images/10.jpg'
    },
    {
        id: 11,
        country: "India",
        city: "New Delhi",
        contact: "+91 11 2677 9191",
        name: "Radisson Blu Plaza",
        price_per_night: "$95",
        ref: "https://www.radissonhotels.com/en-us/destination/india/new-delhi?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf7O-8Q3EnzEq2AsIAsE6CoA_SWoQlv8m1dS2paMOAvbJc5MbtjNIyBoCdx8QAvD_BwE&gclsrc=aw.ds",
        img: '../images/11.jpg'
    },
    {
        id: 12,
        country: "India",
        city: "New Delhi",
        contact: "+91 11 4652 8000",
        name: "Hotel Airport City",
        price_per_night: "$20",
        ref: "http://www.hotelairportcity.in/",
        img: '../images/12.jpg'
    },
    {
        id: 13,
        country: "India",
        city: "Kolkata",
        contact: "+91 33 6633 0000",
        name: "JW Marriot Hotel",
        price_per_night: "$119",
        ref: "https://www.marriott.com/en-us/hotels/ccujw-jw-marriott-hotel-kolkata/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2",
        img: '../images/13.jpg'
    },
     {
        id: 14,
        country: "India",
        city: "Kolkata",
        contact: "+91 98301 85080",
        name: "Service Appartments",
        price_per_night: "$45",
        ref: "https://www.booking.com/hotel/in/service-apartment-park-street-calcutta.en-gb.html",
        img: '../images/14.jpg'
    },
    {
        id: 15,
        country: "India",
        city: "Kolkata",
        contact: "+91 33 4446 4646",
        name: "Service Appartments",
        price_per_night: "$145",
        ref: "https://www.marriott.com/en-us/hotels/cculr-itc-royal-bengal-a-luxury-collection-hotel-kolkata/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTI3ODU2NDgtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
        img: '../images/15.jpg'
    },
    {
        id: 16,
        country: "India",
        city: "Himachal Pradesh",
        contact: "+91 177 280 4848",
        name: "Oberoi Cecil",
        price_per_night: "$210",
        ref: "https://www.oberoihotels.com/hotels-in-shimla-cecil/?utm_source=GMBlisting&utm_medium=organic",
        img: '../images/16.jpg'
    },
    {
        id: 17,
        country: "India",
        city: "Himachal Pradesh",
        contact: "+91 98881 88228",
        name: "Curve Villa",
        price_per_night: "$89",
        ref: "https://www.facebook.com/Curvevilla/",
        img: '../images/17.jpg'
    },
    {
        id: 18,
        country: "India",
        city: "Himachal Pradesh",
        contact: "+91 1860 210 1111",
        name: "Club Mahindra Mashobra",
        price_per_night: "$89",
        ref: "https://www.clubmahindra.com/our-resorts/club-mahindra-mashobra-resort-in-himachal-pradesh?utm_source=google&utm_medium=maps&utm_campaign=Club-Mahindra-Resorts-Mashobra-Shimla-Himachal-Pradesh",
        img: '../images/18.jpg'
    },
    {
        id: 19,
        country: "United States of America",
        city: "New York City",
        contact: "+1 212-342-7000",
        name: "Arlo Soho",
        price_per_night: "$324",
        ref: "https://www.arlohotels.com/arlo-soho/?utm_source=local-listings&utm_medium=organic&utm_campaign=yext-soho",
        img: '../images/19.jpg'
    },
    {
        id: 20,
        country: "United States of America",
        city: "New York City",
        contact: "+1 212-693-2001",
        name: "Millenium Hilton",
        price_per_night: "$304",
        ref: "https://www.millenniumhotels.com/en/new-york/millennium-downtown-new-york/",
        img: '../images/20.jpg'
    },
    {
        id: 21,
        country: "United States of America",
        city: "New York City",
        contact: "+1 212-645-4646",
        name: "Standard High Line",
        price_per_night: "$541",
        ref: "https://www.standardhotels.com/new-york/properties/high-line?utm_source=google&utm_campaign=google_my_business&utm_medium=organic",
        img: '../images/21.jpg'
    },
    {
        id: 22,
        country: "United States of America",
        city: "Los Angeles",
        contact: " +1 213-488-3500",
        name: "Sheraton Grand",
        price_per_night: "$249",
        ref: "https://www.marriott.com/en-us/hotels/laxgr-sheraton-grand-los-angeles/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjY2OS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
        img: '../images/22.jpg'
    },
    {
        id: 23,
        country: "United States of America",
        city: "Los Angeles",
        contact: "+1 800-777-0758",
        name: "Oceana Hotel",
        price_per_night: "$83",
        ref: "https://www.hoteloceanasantamonica.com/?SEO_id=GMB-AMER-OL-SMOOLOL&y_source=1_MTk1MzU0OTQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
        img: '../images/23.jpg'
    },
    {
        id: 24,
        country: "United States of America",
        city: "Los Angeles",
        contact: "+1 213-624-1000",
        name: "The Westine Bonaventure Hotel",
        price_per_night: "$230",
        ref: "https://www.marriott.com/en-us/hotels/laxbw-the-westin-bonaventure-hotel-and-suites-los-angeles/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjY3MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
        img: '../images/24.jpg'
    },
    {
        id: 25,
        country: "United States of America",
        city: "Boston",
        contact: "+1 617-747-1000",
        name: "InterContinental Boston",
        price_per_night: "$399",
        ref: "https://www.ihg.com/intercontinental/hotels/us/en/boston/bosha/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-US-_-BOSHA",
        img: '../images/25.jpg'
    },
    {
        id: 26,
        country: "United States of America",
        city: "Boston",
        contact: "+1 844-951-3505",
        name: "Omni Boston Hotel",
        price_per_night: "$256",
        ref: "https://www.bookonline.com/hotel/boston-omni-parker-house-hotel?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf0KAyd0lpkvDfagcefV5-ysFQAeOFWzmbz7fuEVbUIFddf43q_1QFRoCo-AQAvD_BwE#room-types",
        img: '../images/26.jpg'
    },
    {
        id: 27,
        country: "United States of America",
        city: "Boston",
        contact: "+1 617-236-2000",
        name: "Sheraton Boston Hotel",
        price_per_night: "$259",
        ref: "https://www.marriott.com/en-us/hotels/bosbo-sheraton-boston-hotel/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjg4NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
        img: '../images/27.jpg'
    },
    {
        id: 28,
        country: "United Kingdom",
        city: "London",
        contact: "+44 191 232 8343",
        name: "Absolute Pleasure Yacht",
        price_per_night: "$244",
        ref: "https://www.absolutepleasureyacht.com/",
        img: '../images/28.jpg'
    },
    {
        id: 29,
        country: "United Kingdom",
        city: "London",
        contact: "+44 20 7625 8532",
        name: "Maitrise Hotel Maida Vale",
        price_per_night: "$91",
        ref: "https://www.maitrisehotel.co.uk/.well-known/captcha/",
        img: '../images/29.jpg'
    },
    {
        id: 30,
        country: "United Kingdom",
        city: "London",
        contact: "+44 20 8038 8045",
        name: "Canary Wharf Studios",
        price_per_night: "$145",
        ref: "https://www.thisisvertus.com/?utm_source=Google&utm_medium=CPC&utm_campaign=Vertus%20-%20Brand%20PPC&utm_content=Brand&utm_term=studio%20canary%20wharf&utm_campaign=Brand+%26+Competitor+PPC&utm_source=adwords&utm_medium=ppc&hsa_acc=9791348547&hsa_cam=6809308045&hsa_grp=81196869578&hsa_ad=593185712831&hsa_src=g&hsa_tgt=kwd-356204402097&hsa_kw=studio%20canary%20wharf&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwu_mSBhAYEiwA5BBmfxATeYdsGb2STqzwlwrXKP3LvclQ2sAXAA0UMNGScT9RDh_25viRjRoCRUsQAvD_BwE",
        img: '../images/30.jpg'
    },
    {
        id: 31,
        country: "United Kingdom",
        city: "Birmingham",
        contact: "+44 121 794 3004",
        name: "Malmaison Birmingham",
        price_per_night: "$125",
        ref: "https://www.malmaison.com/locations/birmingham/?utm_source=google&utm_medium=organic&utm_campaign=birmingham-gmb",
        img: '../images/31.jpg'
    },
    {
        id: 32,
        country: "United Kingdom",
        city: "Birmingham",
        contact: "+44 121 643 1003",
        name: "Hotel Garden Inn",
        price_per_night: "$108",
        ref: "https://www.hilton.com/en/hotels/bhxbpgi-hilton-garden-inn-birmingham-brindleyplace/?SEO_id=GMB-EMEA-GI-BHXBPGI",
        img: '../images/32.jpg'
    },
    {
        id: 33,
        country: "United Kingdom",
        city: "Birmingham",
        contact: "+44 121 606 9000",
        name: "Jurys Inn",
        price_per_night: "$98",
        ref: "https://www.jurysinns.com/hotels/birmingham/?utm_source=google&utm_medium=local",
        img: '../images/33.jpg'
    },
    {
        id: 34,
        country: "United Kingdom",
        city: "Manchester",
        contact: "+44 161 413 0000",
        name: "Hotel Gotham",
        price_per_night: "$184",
        ref: "https://www.hotelgotham.co.uk/",
        img: '../images/34.jpg'
    },
    {
        id: 35,
        country: "United Kingdom",
        city: "Manchester",
        contact: "+44 161 470 3901",
        name: "Stock Exchange Hotel",
        price_per_night: "$245",
        ref: "https://stockexchangehotel.co.uk/",
        img: '../images/35.jpg'
    },
    {
        id: 36,
        country: "United Kingdom",
        city: "Manchester",
        contact: "+44 161 236 3333",
        name: "The Midland",
        price_per_night: "$245",
        ref: "https://www.themidlandhotel.co.uk/?utm_source=google&utm_medium=local",
        img: '../images/36.jpg'
    },
    {
        id: 37,
        country: "Australia",
        city: "Sydney",
        contact: "+61 2 9250 3100",
        name: "Four Seasons Hotel",
        price_per_night: "$288",
        ref: "https://www.fourseasons.com/sydney/?seo=google_local_syd1_apac",
        img: '../images/37.jpg'
    },
    {
        id: 38,
        country: "Australia",
        city: "Sydney",
        contact: "+61 2 8960 7800",
        name: "The Urban Newtown",
        price_per_night: "$148",
        ref: "https://www.theurbannewtown.com.au/",
        img: '../images/38.jpg'
    },
    {
        id: 39,
        country: "Australia",
        city: "Sydney",
        contact: "+61 2 8272 3300",
        name: "Vibe Hotel",
        price_per_night: "$169",
        ref: "https://vibehotels.com/book-accommodation/sydney/hotel-sydney/?utm_source=googleplaces&utm_medium=organic&utm_campaign=googleplaces&utm_content=vibe-sydney",
        img: '../images/39.jpg'
    },
    {
        id: 40,
        country: "Australia",
        city: "Melbourne",
        contact: "+61 3 9113 8800",
        name: "W Melbourne",
        price_per_night: "$314",
        ref: "https://www.marriott.com/en-us/hotels/melwh-w-melbourne/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTMxNDYyMzAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
        img: '../images/40.jpg'
    },
     {
        id: 41,
        country: "Australia",
        city: "Melbourne",
        contact: "+61 3 8696 8888",
        name: "The Langham",
        price_per_night: "$297",
        ref: "https://www.langhamhotels.com/en/the-langham/melbourne",
        img: '../images/41.jpg'
    },
    {
        id: 42,
        country: "Australia",
        city: "Melbourne",
        contact: "+61 3 9250 1888",
        name: "Rendezvous Hotel",
        price_per_night: "$155",
        ref: "https://rendezvousmelbourne.com.au/?utm_source=googleplaces&utm_medium=organic&utm_campaign=googleplaces&utm_content=rendezvous-melbourne",
        img: '../images/42.jpg'
    },
    {
        id: 43,
        country: "Australia",
        city: "Adelaide",
        contact: "+61 8 8368 9900",
        name: "Oval Hotel",
        price_per_night: "$180",
        ref: "http://www.ovalhotel.com.au/",
        img: '../images/43.jpg'
    },
    {
        id: 44,
        country: "Australia",
        city: "Adelaide",
        contact: "+61 8 8338 1100",
        name: "Arkaba Hotel",
        price_per_night: "$138",
        ref: "https://www.arkabahotel.com.au/",
        img: '../images/44.jpg'
    },
    {
        id: 45,
        country: "Australia",
        city: "Adelaide",
        contact: "+61 8 8267 2020",
        name: "Buxton Manor",
        price_per_night: "$198",
        ref: "https://www.adelaideheritage.com/",
        img: '../images/45.jpg'
    },
    
    {
        id: 46,
        country: "Canada",
        city: "Toronto",
        contact: "+1 416-232-3703",
        name: "Old Mill",
        price_per_night: "$175",
        ref: "https://oldmilltorontohotel.com/",
        img: '../images/46.jpg'
    },
     {
        id: 47,
        country: "Canada",
        city: "Toronto",
        contact: "+1 416-368-2511",
        name: "Fairmont Royal York",
        price_per_night: "$253",
        ref: "https://www.fairmont.com/royal-york-toronto/?goto=fiche_hotel&code_hotel=A551&merchantid=seo-maps-CA-A551&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjE0MTEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
        img: '../images/47.jpg'
    },
    {
        id: 48,
        country: "Canada",
        city: "Toronto",
        contact: "+1 416-362-8439",
        name: "The BroadView Hotel",
        price_per_night: "$225",
        ref: "https://www.thebroadviewhotel.ca/",
        img: '../images/48.jpg'
    },
    {
        id: 49,
        country: "Canada",
        city: "Montreal",
        contact: "+1 514-285-9000",
        name: "Sofitel Montreal Golden Mile",
        price_per_night: "$158",
        ref: "https://all.accor.com/hotel/3646/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
        img: '../images/49.jpg'
    },
    {
        id: 50,
        country: "Canada",
        city: "Montreal",
        contact: "+1 514-370-3000",
        name: "Hotel Birks",
        price_per_night: "$314",
        ref: "https://hotelbirksmontreal.com/",
        img: '../images/50.jpg'
    },
    {
        id: 51,
        country: "Canada",
        city: "Montreal",
        contact: "+1 514-656-5600",
        name: "Hotel William Gray",
        price_per_night: "$210",
        ref: "https://hotelwilliamgray.com/.well-known/captcha/",
        img: '../images/51.jpg'
    },
    
    {
        id: 52,
        country: "Canada",
        city: "Vancouver",
        contact: "+1 604-620-6200",
        name: "Hotel William Gray",
        price_per_night: "$145",
        ref: "https://www.hotelbluvancouver.com/",
        img: '../images/52.jpg'
    },
    {
        id: 53,
        country: "Canada",
        city: "Vancouver",
        contact: "+1 604-662-8111",
        name: "Pan Pacific",
        price_per_night: "$222",
        ref: "https://www.panpacific.com/en/hotels-and-resorts/pp-vancouver.html?utm_source=google&utm_medium=business_listing&utm_campaign=googlemybusiness",
        img: '../images/53.jpg'
    },
    {
        id: 54,
        country: "Canada",
        city: "Vancouver",
        contact: "+1 604-683-1234",
        name: "Hyatt Regency",
        price_per_night: "$190",
        ref: "https://www.hyatt.com/en-US/hotel/canada/hyatt-regency-vancouver/yvrrv?src=corp_lclb_gmb_seo_yvrrv",
        img: '../images/54.jpg'
    },
    {
        id: 55,
        country: "Thailand",
        city: "Bangkok",
        contact: "+66 2 679 1200",
        name: "Banyan Tree",
        price_per_night: "$107",
        ref: "https://www.banyantree.com/thailand/bangkok",
        img: '../images/55.jpg'
    },
    {
        id: 56,
        country: "Thailand",
        city: "Bangkok",
        contact: "+66 99 116 6365",
        name: "Don Muang Hotel",
        price_per_night: "$15",
        ref: "https://www.donmuanghotel.com/",
        img: '../images/56.jpg'
    },
     {
        id: 57,
        country: "Thailand",
        city: "Bangkok",
        contact: "+66 2 659 2888",
        name: "Ibis Bangkok Sathorn",
        price_per_night: "$178",
        ref: "https://all.accor.com/errors/session-expired/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
        img: '../images/57.jpg'
    },
    {
        id: 58,
        country: "Thailand",
        city: "Phuket",
        contact: "+66 2 027 7888",
        name: "The Base Uptown By Favstay",
        price_per_night: "$45",
        ref: "https://www.sansiri.com/condominium/thebase-uptown-phuket/th/",
        img: '../images/58.jpg'
    },
    
    {
        id: 59,
        country: "Thailand",
        city: "Phuket",
        contact: "+66 98 376 9322",
        name: "Kamala Heights",
        price_per_night: "$413",
        ref: "https://phoalard.net/4/1407888/?var=2579905&ab2r=0&prfrev=false",
        img: '../images/59.jpg'
    },
    {
        id: 60,
        country: "Thailand",
        city: "Phuket",
        contact: "+66 76 370 100",
        name: "Le Meridien Phuket Beach Resorts",
        price_per_night: "$125",
        ref: "https://www.marriott.com/en-us/hotels/hktmd-le-meridien-phuket-beach-resort/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_Mjg2OTgzMi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
        img: '../images/60.jpg'
    },
    {
        id: 61,
        country: "Thailand",
        city: "Krabi",
        contact: "+66 90 964 6495",
        name: "The Haven",
        price_per_night: "$149",
        ref: "https://www.thehavenkrabi.com/",
        img: '../images/61.jpg'
    },
    {
        id: 62,
        country: "Thailand",
        city: "Krabi",
        contact: "+66 75 639 999",
        name: "Deevana Plaza",
        price_per_night: "$18",
        ref: "http://www.deevanaplazakrabi.com/",
        img: '../images/62.jpg'
    },
    {
        id: 63,
        country: "Thailand",
        city: "Krabi",
        contact: "+66 75 695 633",
        name: "Baan Manu Chang",
        price_per_night: "$118",
        ref: "https://www.krabivillas.com/en/villas/baan-manu-chang",
        img: '../images/63.jpg'
    },
    {
        id: 64,
        country: "Turkey",
        city: "Istanbul",
        contact: "+90 212 377 40 00",
        name: "Pera Palace Hotel",
        price_per_night: "$175",
        ref: "https://perapalace.com/",
        img: '../images/64.jpg'
    },
    {
        id: 65,
        country: "Turkey",
        city: "Istanbul",
        contact: "+90 212 377 45 45",
        name: "Barcelo Istanbul",
        price_per_night: "$135",
        ref: "https://www.barcelo.com/en-gb/barcelo-istanbul/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=7386",
        img: '../images/65.jpg'
    },
    {
        id: 66,
        country: "Turkey",
        city: "Istanbul",
        contact: "+90 212 243 91 61",
        name: "Cirrus Tomtom",
        price_per_night: "$33",
        ref: "https://www.cirrustomtom.com/",
        img: '../images/66.jpg'
    },
    {
        id: 67,
        country: "Turkey",
        city: "Izmir",
        contact: "+90 232 273 73 03",
        name: "Tav Airport Hotel",
        price_per_night: "$52",
        ref: "https://www.tavairporthotels.com.tr/",
        img: '../images/67.jpg'
    },
    {
        id: 68,
        country: "Turkey",
        city: "Izmir",
        contact: "+90 232 425 12 69",
        name: "Olimpiyat Otel",
        price_per_night: "$21",
        ref: "https://www.olimpiyatotelizmir.com/",
        img: '../images/68.jpg'
    },
    {
        id: 69,
        country: "Turkey",
        city: "Izmir",
        contact: "+90 232 446 57 44",
        name: "Kozan City Hotel",
        price_per_night: "$30",
        ref: "https://kozancityhotel.com/",
        img: '../images/69.jpg'
    },
    {
        id: 70,
        country: "Turkey",
        city: "Antalya",
        contact: "+90 242 310 99 99",
        name: "Akra Hotel",
        price_per_night: "$147",
        ref: "https://www.akrahotels.com/",
        img: '../images/70.jpg'
    },
    {
        id: 71,
        country: "Turkey",
        city: "Antalya",
        contact: "+90 242 228 77 18",
        name: "Crowne Plaza",
        price_per_night: "$79",
        ref: "https://www.ihg.com/crowneplaza/hotels/gb/en/antalya/aytya/hoteldetail?cm_mmc=GoogleMaps-_-CP-_-TR-_-AYTYA",
        img: '../images/71.jpg'
    },
    {
        id: 72,
        country: "Turkey",
        city: "Antalya",
        contact: "+90 530 860 25 81",
        name: "Flamingo Residence",
        price_per_night: "$40",
        ref: "http://flamingo-residence.allantalyahotels.org/en//",
        img: '../images/72.jpg'
    }
]
// const Data = [
//     {
//         id: 1,
//         country: "Pakistan",
//         city: "Islamabad",
//         contact: "(051) 111 133 133",
//         name: "Serena Hotel",
//         price_per_night: "$300",
//         ref: "https://www.serenahotels.com",
//         img: '../../images/1.jpg'
//     },
//     {
//         id: 2,
//         country: "Pakistan",
//         city: "Islamabad",
//         contact: "0336 6111169",
//         name: "Sheltons Ambassador",
//         price_per_night: "$62",
//         ref: "https://shelton-s-ambassador-islamabad.booked.net/",
//         img: '../../images/2.jpg'
//     },
//     {
//         id: 3,
//         country: "Pakistan",
//         city: "Islamabad",
//         contact: "(051) 8731651",
//         name: "Chalet Hotel",
//         price_per_night: "$67",
//         ref: "https://www.schaletislamabad.com/en/",
//         img: '../../images/3.jpg'
//     },
//     {
//         id: 4,
//         country: "Pakistan",
//         city: "Lahore",
//         contact: "0320 1999955",
//         name: "Luxus Hotel",
//         price_per_night: "$55",
//         ref: "https://www.luxusgrandhotel.com/",
//         img: '../../images/4.jpg'
//     },
//     {
//         id: 5,
//         country: "Pakistan",
//         city: "Lahore",
//         contact: "(042) 111 395 395",
//         name: "Residency Hotel",
//         price_per_night: "$52",
//         ref: "https://rh.com.pk/",
//         img: '../../images/5.jpg'
//     },
//     {
//         id: 6,
//         country: "Pakistan",
//         city: "Lahore",
//         contact: "(042) 111 000 329",
//         name: "Royal Swiss Hotel",
//         price_per_night: "$89",
//         ref: "http://royalswisshotels.com/lahore-pakistan",
//         img: '../../images/6.jpg'
//     },
//     {
//         id: 7,
//         country: "Pakistan",
//         city: "Murree",
//         contact: "0300 5002719",
//         name: "Shangrila Resort",
//         price_per_night: "$95",
//         ref: "https://shangrila.pk/",
//         img: '../../images/7.jpg'
//     },
//     {
//         id: 8,
//         country: "Pakistan",
//         city: "Murree",
//         contact: "0311 1788999",
//         name: "Opulent Resort",
//         price_per_night: "$86",
//         ref: "https://the-opulent-resort-and-conference-venue-bhurban.booked.net/",
//         img: '../../images/8.jpg'
//     },
//     {
//         id: 9,
//         country: "Pakistan",
//         city: "Murree",
//         contact: "0303 5330666",
//         name: "Aloche Apartments",
//         price_per_night: "$86",
//         ref: "https://alocheapartments.com.pk/",
//         img: '../../images/9.jpg'
//     },
//     {
//         id: 10,
//         country: "India",
//         city: "New Delhi",
//         contact: "+1 866-238-8235",
//         name: "Radisson Blu Plaza",
//         price_per_night: "$113",
//         ref: "https://www.guestreservations.com/taj-palace-hotel/booking?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf-BzngOnzvjerwKCnNZbuFea7a92DqX29iiJN1e3a_-Ymjw339jHxBoCnLwQAvD_BwE",
//         img: '../../images/10.jpg'
//     },
//     {
//         id: 11,
//         country: "India",
//         city: "New Delhi",
//         contact: "+91 11 2677 9191",
//         name: "Radisson Blu Plaza",
//         price_per_night: "$95",
//         ref: "https://www.radissonhotels.com/en-us/destination/india/new-delhi?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf7O-8Q3EnzEq2AsIAsE6CoA_SWoQlv8m1dS2paMOAvbJc5MbtjNIyBoCdx8QAvD_BwE&gclsrc=aw.ds",
//         img: '../../images/11.jpg'
//     },
//     {
//         id: 12,
//         country: "India",
//         city: "New Delhi",
//         contact: "+91 11 4652 8000",
//         name: "Hotel Airport City",
//         price_per_night: "$20",
//         ref: "http://www.hotelairportcity.in/",
//         img: '../../images/12.jpg'
//     },
//     {
//         id: 13,
//         country: "India",
//         city: "Kolkata",
//         contact: "+91 33 6633 0000",
//         name: "JW Marriot Hotel",
//         price_per_night: "$119",
//         ref: "https://www.marriott.com/en-us/hotels/ccujw-jw-marriott-hotel-kolkata/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2",
//         img: '../../images/13.jpg'
//     },
//      {
//         id: 14,
//         country: "India",
//         city: "Kolkata",
//         contact: "+91 98301 85080",
//         name: "Service Appartments",
//         price_per_night: "$45",
//         ref: "https://www.booking.com/hotel/in/service-apartment-park-street-calcutta.en-gb.html",
//         img: '../../images/14.jpg'
//     },
//     {
//         id: 15,
//         country: "India",
//         city: "Kolkata",
//         contact: "+91 33 4446 4646",
//         name: "Service Appartments",
//         price_per_night: "$145",
//         ref: "https://www.marriott.com/en-us/hotels/cculr-itc-royal-bengal-a-luxury-collection-hotel-kolkata/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTI3ODU2NDgtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
//         img: '../../images/15.jpg'
//     },
//     {
//         id: 16,
//         country: "India",
//         city: "Himachal Pradesh",
//         contact: "+91 177 280 4848",
//         name: "Oberoi Cecil",
//         price_per_night: "$210",
//         ref: "https://www.oberoihotels.com/hotels-in-shimla-cecil/?utm_source=GMBlisting&utm_medium=organic",
//         img: '../../images/16.jpg'
//     },
//     {
//         id: 17,
//         country: "India",
//         city: "Himachal Pradesh",
//         contact: "+91 98881 88228",
//         name: "Curve Villa",
//         price_per_night: "$89",
//         ref: "https://www.facebook.com/Curvevilla/",
//         img: '../../images/17.jpg'
//     },
//     {
//         id: 18,
//         country: "India",
//         city: "Himachal Pradesh",
//         contact: "+91 1860 210 1111",
//         name: "Club Mahindra Mashobra",
//         price_per_night: "$89",
//         ref: "https://www.clubmahindra.com/our-resorts/club-mahindra-mashobra-resort-in-himachal-pradesh?utm_source=google&utm_medium=maps&utm_campaign=Club-Mahindra-Resorts-Mashobra-Shimla-Himachal-Pradesh",
//         img: '../../images/18.jpg'
//     },
//     {
//         id: 19,
//         country: "United States of America",
//         city: "New York City",
//         contact: "+1 212-342-7000",
//         name: "Arlo Soho",
//         price_per_night: "$324",
//         ref: "https://www.arlohotels.com/arlo-soho/?utm_source=local-listings&utm_medium=organic&utm_campaign=yext-soho",
//         img: '../../images/19.jpg'
//     },
//     {
//         id: 20,
//         country: "United States of America",
//         city: "New York City",
//         contact: "+1 212-693-2001",
//         name: "Millenium Hilton",
//         price_per_night: "$304",
//         ref: "https://www.millenniumhotels.com/en/new-york/millennium-downtown-new-york/",
//         img: '../../images/20.jpg'
//     },
//     {
//         id: 21,
//         country: "United States of America",
//         city: "New York City",
//         contact: "+1 212-645-4646",
//         name: "Standard High Line",
//         price_per_night: "$541",
//         ref: "https://www.standardhotels.com/new-york/properties/high-line?utm_source=google&utm_campaign=google_my_business&utm_medium=organic",
//         img: '../../images/21.jpg'
//     },
//     {
//         id: 22,
//         country: "United States of America",
//         city: "Los Angeles",
//         contact: " +1 213-488-3500",
//         name: "Sheraton Grand",
//         price_per_night: "$249",
//         ref: "https://www.marriott.com/en-us/hotels/laxgr-sheraton-grand-los-angeles/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjY2OS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
//         img: '../../images/22.jpg'
//     },
//     {
//         id: 23,
//         country: "United States of America",
//         city: "Los Angeles",
//         contact: "+1 800-777-0758",
//         name: "Oceana Hotel",
//         price_per_night: "$83",
//         ref: "https://www.hoteloceanasantamonica.com/?SEO_id=GMB-AMER-OL-SMOOLOL&y_source=1_MTk1MzU0OTQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
//         img: '../../images/23.jpg'
//     },
//     {
//         id: 24,
//         country: "United States of America",
//         city: "Los Angeles",
//         contact: "+1 213-624-1000",
//         name: "The Westine Bonaventure Hotel",
//         price_per_night: "$230",
//         ref: "https://www.marriott.com/en-us/hotels/laxbw-the-westin-bonaventure-hotel-and-suites-los-angeles/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjY3MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
//         img: '../../images/24.jpg'
//     },
//     {
//         id: 25,
//         country: "United States of America",
//         city: "Boston",
//         contact: "+1 617-747-1000",
//         name: "InterContinental Boston",
//         price_per_night: "$399",
//         ref: "https://www.ihg.com/intercontinental/hotels/us/en/boston/bosha/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-US-_-BOSHA",
//         img: '../../images/25.jpg'
//     },
//     {
//         id: 26,
//         country: "United States of America",
//         city: "Boston",
//         contact: "+1 844-951-3505",
//         name: "Omni Boston Hotel",
//         price_per_night: "$256",
//         ref: "https://www.bookonline.com/hotel/boston-omni-parker-house-hotel?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf0KAyd0lpkvDfagcefV5-ysFQAeOFWzmbz7fuEVbUIFddf43q_1QFRoCo-AQAvD_BwE#room-types",
//         img: '../../images/26.jpg'
//     },
//     {
//         id: 27,
//         country: "United States of America",
//         city: "Boston",
//         contact: "+1 617-236-2000",
//         name: "Sheraton Boston Hotel",
//         price_per_night: "$259",
//         ref: "https://www.marriott.com/en-us/hotels/bosbo-sheraton-boston-hotel/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjg4NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
//         img: '../../images/27.jpg'
//     },
//     {
//         id: 28,
//         country: "United Kingdom",
//         city: "London",
//         contact: "+44 191 232 8343",
//         name: "Absolute Pleasure Yacht",
//         price_per_night: "$244",
//         ref: "https://www.absolutepleasureyacht.com/",
//         img: '../../images/28.jpg'
//     },
//     {
//         id: 29,
//         country: "United Kingdom",
//         city: "London",
//         contact: "+44 20 7625 8532",
//         name: "Maitrise Hotel Maida Vale",
//         price_per_night: "$91",
//         ref: "https://www.maitrisehotel.co.uk/.well-known/captcha/",
//         img: '../../images/29.jpg'
//     },
//     {
//         id: 30,
//         country: "United Kingdom",
//         city: "London",
//         contact: "+44 20 8038 8045",
//         name: "Canary Wharf Studios",
//         price_per_night: "$145",
//         ref: "https://www.thisisvertus.com/?utm_source=Google&utm_medium=CPC&utm_campaign=Vertus%20-%20Brand%20PPC&utm_content=Brand&utm_term=studio%20canary%20wharf&utm_campaign=Brand+%26+Competitor+PPC&utm_source=adwords&utm_medium=ppc&hsa_acc=9791348547&hsa_cam=6809308045&hsa_grp=81196869578&hsa_ad=593185712831&hsa_src=g&hsa_tgt=kwd-356204402097&hsa_kw=studio%20canary%20wharf&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwu_mSBhAYEiwA5BBmfxATeYdsGb2STqzwlwrXKP3LvclQ2sAXAA0UMNGScT9RDh_25viRjRoCRUsQAvD_BwE",
//         img: '../../images/30.jpg'
//     },
//     {
//         id: 31,
//         country: "United Kingdom",
//         city: "Birmingham",
//         contact: "+44 121 794 3004",
//         name: "Malmaison Birmingham",
//         price_per_night: "$125",
//         ref: "https://www.malmaison.com/locations/birmingham/?utm_source=google&utm_medium=organic&utm_campaign=birmingham-gmb",
//         img: '../../images/31.jpg'
//     },
//     {
//         id: 32,
//         country: "United Kingdom",
//         city: "Birmingham",
//         contact: "+44 121 643 1003",
//         name: "Hotel Garden Inn",
//         price_per_night: "$108",
//         ref: "https://www.hilton.com/en/hotels/bhxbpgi-hilton-garden-inn-birmingham-brindleyplace/?SEO_id=GMB-EMEA-GI-BHXBPGI",
//         img: '../../images/32.jpg'
//     },
//     {
//         id: 33,
//         country: "United Kingdom",
//         city: "Birmingham",
//         contact: "+44 121 606 9000",
//         name: "Jurys Inn",
//         price_per_night: "$98",
//         ref: "https://www.jurysinns.com/hotels/birmingham/?utm_source=google&utm_medium=local",
//         img: '../../images/33.jpg'
//     },
//     {
//         id: 34,
//         country: "United Kingdom",
//         city: "Manchester",
//         contact: "+44 161 413 0000",
//         name: "Hotel Gotham",
//         price_per_night: "$184",
//         ref: "https://www.hotelgotham.co.uk/",
//         img: '../../images/34.jpg'
//     },
//     {
//         id: 35,
//         country: "United Kingdom",
//         city: "Manchester",
//         contact: "+44 161 470 3901",
//         name: "Stock Exchange Hotel",
//         price_per_night: "$245",
//         ref: "https://stockexchangehotel.co.uk/",
//         img: '../../images/35.jpg'
//     },
//     {
//         id: 36,
//         country: "United Kingdom",
//         city: "Manchester",
//         contact: "+44 161 236 3333",
//         name: "The Midland",
//         price_per_night: "$245",
//         ref: "https://www.themidlandhotel.co.uk/?utm_source=google&utm_medium=local",
//         img: '../../images/36.jpg'
//     },
//     {
//         id: 37,
//         country: "Australia",
//         city: "Sydney",
//         contact: "+61 2 9250 3100",
//         name: "Four Seasons Hotel",
//         price_per_night: "$288",
//         ref: "https://www.fourseasons.com/sydney/?seo=google_local_syd1_apac",
//         img: '../../images/37.jpg'
//     },
//     {
//         id: 38,
//         country: "Australia",
//         city: "Sydney",
//         contact: "+61 2 8960 7800",
//         name: "The Urban Newtown",
//         price_per_night: "$148",
//         ref: "https://www.theurbannewtown.com.au/",
//         img: '../../images/38.jpg'
//     },
//     {
//         id: 39,
//         country: "Australia",
//         city: "Sydney",
//         contact: "+61 2 8272 3300",
//         name: "Vibe Hotel",
//         price_per_night: "$169",
//         ref: "https://vibehotels.com/book-accommodation/sydney/hotel-sydney/?utm_source=googleplaces&utm_medium=organic&utm_campaign=googleplaces&utm_content=vibe-sydney",
//         img: '../../images/39.jpg'
//     },
//     {
//         id: 40,
//         country: "Australia",
//         city: "Melbourne",
//         contact: "+61 3 9113 8800",
//         name: "W Melbourne",
//         price_per_night: "$314",
//         ref: "https://www.marriott.com/en-us/hotels/melwh-w-melbourne/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTMxNDYyMzAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
//         img: '../../images/40.jpg'
//     },
//      {
//         id: 41,
//         country: "Australia",
//         city: "Melbourne",
//         contact: "+61 3 8696 8888",
//         name: "The Langham",
//         price_per_night: "$297",
//         ref: "https://www.langhamhotels.com/en/the-langham/melbourne",
//         img: '../../images/41.jpg'
//     },
//     {
//         id: 42,
//         country: "Australia",
//         city: "Melbourne",
//         contact: "+61 3 9250 1888",
//         name: "Rendezvous Hotel",
//         price_per_night: "$155",
//         ref: "https://rendezvousmelbourne.com.au/?utm_source=googleplaces&utm_medium=organic&utm_campaign=googleplaces&utm_content=rendezvous-melbourne",
//         img: '../../images/42.jpg'
//     },
//     {
//         id: 43,
//         country: "Australia",
//         city: "Adelaide",
//         contact: "+61 8 8368 9900",
//         name: "Oval Hotel",
//         price_per_night: "$180",
//         ref: "http://www.ovalhotel.com.au/",
//         img: '../../images/43.jpg'
//     },
//     {
//         id: 44,
//         country: "Australia",
//         city: "Adelaide",
//         contact: "+61 8 8338 1100",
//         name: "Arkaba Hotel",
//         price_per_night: "$138",
//         ref: "https://www.arkabahotel.com.au/",
//         img: '../../images/44.jpg'
//     },
//     {
//         id: 45,
//         country: "Australia",
//         city: "Adelaide",
//         contact: "+61 8 8267 2020",
//         name: "Buxton Manor",
//         price_per_night: "$198",
//         ref: "https://www.adelaideheritage.com/",
//         img: '../../images/45.jpg'
//     },
    
//     {
//         id: 46,
//         country: "Canada",
//         city: "Toronto",
//         contact: "+1 416-232-3703",
//         name: "Old Mill",
//         price_per_night: "$175",
//         ref: "https://oldmilltorontohotel.com/",
//         img: '../../images/46.jpg'
//     },
//      {
//         id: 47,
//         country: "Canada",
//         city: "Toronto",
//         contact: "+1 416-368-2511",
//         name: "Fairmont Royal York",
//         price_per_night: "$253",
//         ref: "https://www.fairmont.com/royal-york-toronto/?goto=fiche_hotel&code_hotel=A551&merchantid=seo-maps-CA-A551&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjE0MTEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
//         img: '../../images/47.jpg'
//     },
//     {
//         id: 48,
//         country: "Canada",
//         city: "Toronto",
//         contact: "+1 416-362-8439",
//         name: "The BroadView Hotel",
//         price_per_night: "$225",
//         ref: "https://www.thebroadviewhotel.ca/",
//         img: '../../images/48.jpg'
//     },
//     {
//         id: 49,
//         country: "Canada",
//         city: "Montreal",
//         contact: "+1 514-285-9000",
//         name: "Sofitel Montreal Golden Mile",
//         price_per_night: "$158",
//         ref: "https://all.accor.com/hotel/3646/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
//         img: '../../images/49.jpg'
//     },
//     {
//         id: 50,
//         country: "Canada",
//         city: "Montreal",
//         contact: "+1 514-370-3000",
//         name: "Hotel Birks",
//         price_per_night: "$314",
//         ref: "https://hotelbirksmontreal.com/",
//         img: '../../images/50.jpg'
//     },
//     {
//         id: 51,
//         country: "Canada",
//         city: "Montreal",
//         contact: "+1 514-656-5600",
//         name: "Hotel William Gray",
//         price_per_night: "$210",
//         ref: "https://hotelwilliamgray.com/.well-known/captcha/",
//         img: '../../images/51.jpg'
//     },
    
//     {
//         id: 52,
//         country: "Canada",
//         city: "Vancouver",
//         contact: "+1 604-620-6200",
//         name: "Hotel William Gray",
//         price_per_night: "$145",
//         ref: "https://www.hotelbluvancouver.com/",
//         img: '../../images/52.jpg'
//     },
//     {
//         id: 53,
//         country: "Canada",
//         city: "Vancouver",
//         contact: "+1 604-662-8111",
//         name: "Pan Pacific",
//         price_per_night: "$222",
//         ref: "https://www.panpacific.com/en/hotels-and-resorts/pp-vancouver.html?utm_source=google&utm_medium=business_listing&utm_campaign=googlemybusiness",
//         img: '../../images/53.jpg'
//     },
//     {
//         id: 54,
//         country: "Canada",
//         city: "Vancouver",
//         contact: "+1 604-683-1234",
//         name: "Hyatt Regency",
//         price_per_night: "$190",
//         ref: "https://www.hyatt.com/en-US/hotel/canada/hyatt-regency-vancouver/yvrrv?src=corp_lclb_gmb_seo_yvrrv",
//         img: '../../images/54.jpg'
//     },
//     {
//         id: 55,
//         country: "Thailand",
//         city: "Bangkok",
//         contact: "+66 2 679 1200",
//         name: "Banyan Tree",
//         price_per_night: "$107",
//         ref: "https://www.banyantree.com/thailand/bangkok",
//         img: '../../images/55.jpg'
//     },
//     {
//         id: 56,
//         country: "Thailand",
//         city: "Bangkok",
//         contact: "+66 99 116 6365",
//         name: "Don Muang Hotel",
//         price_per_night: "$15",
//         ref: "https://www.donmuanghotel.com/",
//         img: '../../images/56.jpg'
//     },
//      {
//         id: 57,
//         country: "Thailand",
//         city: "Bangkok",
//         contact: "+66 2 659 2888",
//         name: "Ibis Bangkok Sathorn",
//         price_per_night: "$178",
//         ref: "https://all.accor.com/errors/session-expired/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
//         img: '../../images/57.jpg'
//     },
//     {
//         id: 58,
//         country: "Thailand",
//         city: "Phuket",
//         contact: "+66 2 027 7888",
//         name: "The Base Uptown By Favstay",
//         price_per_night: "$45",
//         ref: "https://www.sansiri.com/condominium/thebase-uptown-phuket/th/",
//         img: '../../images/58.jpg'
//     },
    
//     {
//         id: 59,
//         country: "Thailand",
//         city: "Phuket",
//         contact: "+66 98 376 9322",
//         name: "Kamala Heights",
//         price_per_night: "$413",
//         ref: "https://phoalard.net/4/1407888/?var=2579905&ab2r=0&prfrev=false",
//         img: '../../images/59.jpg'
//     },
//     {
//         id: 60,
//         country: "Thailand",
//         city: "Phuket",
//         contact: "+66 76 370 100",
//         name: "Le Meridien Phuket Beach Resorts",
//         price_per_night: "$125",
//         ref: "https://www.marriott.com/en-us/hotels/hktmd-le-meridien-phuket-beach-resort/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_Mjg2OTgzMi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
//         img: '../../images/60.jpg'
//     },
//     {
//         id: 61,
//         country: "Thailand",
//         city: "Krabi",
//         contact: "+66 90 964 6495",
//         name: "The Haven",
//         price_per_night: "$149",
//         ref: "https://www.thehavenkrabi.com/",
//         img: '../../images/61.jpg'
//     },
//     {
//         id: 62,
//         country: "Thailand",
//         city: "Krabi",
//         contact: "+66 75 639 999",
//         name: "Deevana Plaza",
//         price_per_night: "$18",
//         ref: "http://www.deevanaplazakrabi.com/",
//         img: '../../images/62.jpg'
//     },
//     {
//         id: 63,
//         country: "Thailand",
//         city: "Krabi",
//         contact: "+66 75 695 633",
//         name: "Baan Manu Chang",
//         price_per_night: "$118",
//         ref: "https://www.krabivillas.com/en/villas/baan-manu-chang",
//         img: '../../images/63.jpg'
//     },
//     {
//         id: 64,
//         country: "Turkey",
//         city: "Istanbul",
//         contact: "+90 212 377 40 00",
//         name: "Pera Palace Hotel",
//         price_per_night: "$175",
//         ref: "https://perapalace.com/",
//         img: '../../images/64.jpg'
//     },
//     {
//         id: 65,
//         country: "Turkey",
//         city: "Istanbul",
//         contact: "+90 212 377 45 45",
//         name: "Barcelo Istanbul",
//         price_per_night: "$135",
//         ref: "https://www.barcelo.com/en-gb/barcelo-istanbul/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=7386",
//         img: '../../images/65.jpg'
//     },
//     {
//         id: 66,
//         country: "Turkey",
//         city: "Istanbul",
//         contact: "+90 212 243 91 61",
//         name: "Cirrus Tomtom",
//         price_per_night: "$33",
//         ref: "https://www.cirrustomtom.com/",
//         img: '../../images/66.jpg'
//     },
//     {
//         id: 67,
//         country: "Turkey",
//         city: "Izmir",
//         contact: "+90 232 273 73 03",
//         name: "Tav Airport Hotel",
//         price_per_night: "$52",
//         ref: "https://www.tavairporthotels.com.tr/",
//         img: '../../images/67.jpg'
//     },
//     {
//         id: 68,
//         country: "Turkey",
//         city: "Izmir",
//         contact: "+90 232 425 12 69",
//         name: "Olimpiyat Otel",
//         price_per_night: "$21",
//         ref: "https://www.olimpiyatotelizmir.com/",
//         img: '../../images/68.jpg'
//     },
//     {
//         id: 69,
//         country: "Turkey",
//         city: "Izmir",
//         contact: "+90 232 446 57 44",
//         name: "Kozan City Hotel",
//         price_per_night: "$30",
//         ref: "https://kozancityhotel.com/",
//         img: '../../images/69.jpg'
//     },
//     {
//         id: 70,
//         country: "Turkey",
//         city: "Antalya",
//         contact: "+90 242 310 99 99",
//         name: "Akra Hotel",
//         price_per_night: "$147",
//         ref: "https://www.akrahotels.com/",
//         img: '../../images/70.jpg'
//     },
//     {
//         id: 71,
//         country: "Turkey",
//         city: "Antalya",
//         contact: "+90 242 228 77 18",
//         name: "Crowne Plaza",
//         price_per_night: "$79",
//         ref: "https://www.ihg.com/crowneplaza/hotels/gb/en/antalya/aytya/hoteldetail?cm_mmc=GoogleMaps-_-CP-_-TR-_-AYTYA",
//         img: '../../images/71.jpg'
//     },
//     {
//         id: 72,
//         country: "Turkey",
//         city: "Antalya",
//         contact: "+90 530 860 25 81",
//         name: "Flamingo Residence",
//         price_per_night: "$40",
//         ref: "http://flamingo-residence.allantalyahotels.org/en//",
//         img: '../../images/72.jpg'
//     }
// ]

export default Data;

