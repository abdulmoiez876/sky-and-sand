
<?php

$con = mysqli_connect("localhost","root","","trip");
$file = "Hotel.json";

$array = json_decode($file,true);

foreach($array as $row){
    $sql = "INSERT  INTO info(id,country,city,contact,name,price_per_night,link) VALUES('".$row["id"]."'
    
    , '".$row["country"]."','".$row["city"]."','".$row["contact"]."','".$row["name"]."','".$row["price_per_night"]."','".$row["link"]."')";

    mysqli_query($con,$sql);
}

?>