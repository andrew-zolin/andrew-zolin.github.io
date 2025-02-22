<?php
function get_header($title = '', $description = '', $keywords = '') {
    $default_title = 'Orancy Planet | HR Consultancy & Technology Solutions';
    $default_description = 'Revolutionizing HR functions with innovative solutions. Expert HR consultancy, technology integration, and career support services.';
    $default_keywords = 'HR consultancy, technology solutions, career support, military support, employee well-being, training development';

    $page_title = $title ? $title . ' | Orancy Planet' : $default_title;
    $meta_description = $description ?: $default_description;
    $meta_keywords = $keywords ?: $default_keywords;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $page_title; ?></title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo $meta_description; ?>">
    <meta name="keywords" content="<?php echo $meta_keywords; ?>">
    <meta name="author" content="Orancy Planet">
    
    <!-- Mobile Responsive Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo $page_title; ?>">
    <meta property="og:description" content="<?php echo $meta_description; ?>">
    <meta property="og:image" content="images/logo/logo.png">
    <meta property="og:url" content="https://orancyplanet.com<?php echo $_SERVER['REQUEST_URI']; ?>">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo $page_title; ?>">
    <meta name="twitter:description" content="<?php echo $meta_description; ?>">
    <meta name="twitter:image" content="images/logo/logo.png">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/custom-colors.css">
    <link rel="stylesheet" href="css/pages.css">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="images/fav-icon/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="images/fav-icon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="images/fav-icon/favicon-16x16.png" sizes="16x16">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://orancyplanet.com<?php echo $_SERVER['REQUEST_URI']; ?>">
</head>
<body>
    <div class="boxed_wrapper">
        <?php include 'header.html'; ?>
<?php
}

function get_footer() {
    include 'footer.html';
    echo '</div></body></html>';
}

function get_page_header($title, $breadcrumbs = array()) {
?>
<section class="page-header">
    <div class="container">
        <h1><?php echo $title; ?></h1>
        <?php if (!empty($breadcrumbs)): ?>
        <ul class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <?php foreach ($breadcrumbs as $link => $text): ?>
                <?php if ($link === array_key_last($breadcrumbs)): ?>
                    <li><?php echo $text; ?></li>
                <?php else: ?>
                    <li><a href="<?php echo $link; ?>"><?php echo $text; ?></a></li>
                <?php endif; ?>
            <?php endforeach; ?>
        </ul>
        <?php endif; ?>
    </div>
</section>
<?php
}
?> 