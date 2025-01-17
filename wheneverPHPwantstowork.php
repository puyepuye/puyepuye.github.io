<?php
// Calculate tomorrow's date
$today = new DateTime();
$tomorrow = $today->modify('+1 day');

// Format the date in the desired format
$formattedDate = $tomorrow->format('d') . ' ' . $tomorrow->format('F') . ' ' . $tomorrow->format('Y');

// Output the date
echo $formattedDate;

//TODO: Actually Make it work, maybe tomorrow I will.
?>


