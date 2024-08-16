<?php
// Replace these with your actual coupon codes and associated video IDs
$coupons = [
    "BR4Q9" => ["video1" => "u6hc_oMxafU", "video2" => "-66eMMbg4fg"],
    "VS87s" => ["video1" => "u6hc_oMxafU", "video2" => "-66eMMbg4fg"]
];

// Get the coupon code from the AJAX request
$userCoupon = $_POST['coupon'];

// Check if the coupon code is valid
if (array_key_exists($userCoupon, $coupons)) {
    echo json_encode(["valid" => true, "videos" => $coupons[$userCoupon]]);
} else {
    echo json_encode(["valid" => false]);
}
?>
