<?php
include 'db.php';

$id = $_GET['id'];

$result = mysqli_query($conn, "SELECT * FROM student WHERE id=$id");
$row = mysqli_fetch_assoc($result);

if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['dept'];

    $sql = "UPDATE student SET name='$name', email='$email', mobile='$mobile', department='$dept' WHERE id=$id";

    mysqli_query($conn, $sql);

    header("Location: index.php");
}
?>

<html>
<body>

<h2>Edit Student</h2>

<form method="POST">
    <input type="text" name="name" value="<?php echo $row['name']; ?>"><br><br>
    <input type="email" name="email" value="<?php echo $row['email']; ?>"><br><br>
    <input type="text" name="mobile" value="<?php echo $row['mobile']; ?>"><br><br>
    <input type="text" name="dept" value="<?php echo $row['department']; ?>"><br><br>
    <button type="submit" name="update">Update</button>
</form>

</body>
</html>