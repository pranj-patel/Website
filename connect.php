<?php
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $city = $_POST['city'];
  $subject = $_POST['subject'];

  $conn = new mysqLi('localhost','root','','pranj');
  if ($conn->connect_error) {
  die('Connection Failed : '.$conn->connect_error);
 } else{
        $stmt = $conn->prepare("insert into registration(firstname, lastname, city, subject)
        values(?,?,?,?)");  
        $stmt->bind_param("ssss",$firstname, $lastname,$city,$subject);
        $stmt->execute();
       header('location:index.html');
        $stmt->close();
        $conn->close();
    }
?>