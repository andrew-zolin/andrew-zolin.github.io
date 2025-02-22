<?php
require_once 'includes/template.php';

$title = 'HR Core Products';
$description = 'Comprehensive HR solutions including talent acquisition, employee well-being, training & development. Transform your HR functions with Orancy Planet.';
$keywords = 'HR solutions, talent acquisition, employee well-being, training development, HR transformation';

get_header($title, $description, $keywords);

$breadcrumbs = array(
    'services.html' => 'Services',
    'hr-core-products.html' => 'HR Core Products'
);
get_page_header($title, $breadcrumbs);
?>

<!-- Main Content -->
<section class="service-details sec-padd">
    <div class="container">
        <!-- Introduction -->
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="section-title center">
                    <h2>Empower Your Workforce with <span class="thm-color">Tailored HR Solutions</span></h2>
                    <p>Our HR Core Products are designed to help individual employees and organizations alike, from global recruitment to career development. With years of experience and a high client satisfaction rate, we deliver customized solutions that promote professional development and operational effectiveness.</p>
                </div>
            </div>
        </div>

        <!-- Individual Employee HR Support -->
        <div class="row">
            <div class="col-md-12">
                <h3 class="service-subtitle">Individual Employee HR Support</h3>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="service-box">
                    <div class="icon">
                        <i class="icon-people3"></i>
                    </div>
                    <h3>Career Development</h3>
                    <p>Personalized coaching to help employees achieve their professional goals and advance their careers.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="service-box">
                    <div class="icon">
                        <i class="icon-technology"></i>
                    </div>
                    <h3>Recruitment Support</h3>
                    <p>End-to-end assistance in finding the right talent for your organization with proven strategies.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="service-box">
                    <div class="icon">
                        <i class="icon-star"></i>
                    </div>
                    <h3>CV & LinkedIn Profile</h3>
                    <p>Professional optimization of your CV and LinkedIn profile to enhance visibility and success rates.</p>
                </div>
            </div>
        </div>

        <!-- Business HR Support -->
        <div class="row">
            <div class="col-md-12">
                <h3 class="service-subtitle">Business HR Support Services</h3>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="service-box">
                    <div class="icon">
                        <i class="icon-heart2"></i>
                    </div>
                    <h3>Talent Acquisition</h3>
                    <p>Attract and hire top talent with proven recruitment strategies and industry best practices.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="service-box">
                    <div class="icon">
                        <i class="icon-shapes"></i>
                    </div>
                    <h3>Employee Retention</h3>
                    <p>Reduce turnover with targeted retention programs and engagement strategies.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="service-box">
                    <div class="icon">
                        <i class="icon-note"></i>
                    </div>
                    <h3>HR Consultancy</h3>
                    <p>Expert guidance to align HR practices with business goals and industry standards.</p>
                </div>
            </div>
        </div>

        <!-- Pricing Section -->
        <div class="row">
            <div class="col-md-12">
                <h3 class="service-subtitle">Our Pricing Plans</h3>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricing-table">
                    <h3 class="package-name">Tier 1 (Basic)</h3>
                    <div class="price">£5,300</div>
                    <p class="text-center">Per Project</p>
                    <ul>
                        <li><i class="fa fa-check"></i> Career Development</li>
                        <li><i class="fa fa-check"></i> Recruitment Support</li>
                        <li><i class="fa fa-check"></i> Talent Acquisition</li>
                        <li><i class="fa fa-check"></i> Employee Retention Strategies</li>
                        <li><i class="fa fa-check"></i> Complaint Resolution</li>
                        <li><i class="fa fa-check"></i> Case Investigations</li>
                        <li><i class="fa fa-check"></i> Custom Software Solutions</li>
                        <li><i class="fa fa-check"></i> HR Technology Integrations</li>
                    </ul>
                    <a href="contact.html" class="thm-btn">Get Started</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricing-table featured">
                    <h3 class="package-name">Tier 2 (Standard)</h3>
                    <div class="price">£9,800</div>
                    <p class="text-center">Per Project</p>
                    <ul>
                        <li><i class="fa fa-check"></i> All Tier 1 Services</li>
                        <li><i class="fa fa-check"></i> Immigration Support Letters</li>
                        <li><i class="fa fa-check"></i> HR Consultancy</li>
                        <li><i class="fa fa-check"></i> Policy Development</li>
                        <li><i class="fa fa-check"></i> Conflict Mediation</li>
                        <li><i class="fa fa-check"></i> AI-Driven Recruitment Tools</li>
                        <li><i class="fa fa-check"></i> Personalized Health Coaching</li>
                        <li><i class="fa fa-check"></i> Leadership Training</li>
                    </ul>
                    <a href="contact.html" class="thm-btn">Get Started</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricing-table">
                    <h3 class="package-name">Tier 3 (Premium)</h3>
                    <div class="price">£16,000</div>
                    <p class="text-center">Per Project</p>
                    <ul>
                        <li><i class="fa fa-check"></i> All Tier 2 Services</li>
                        <li><i class="fa fa-check"></i> Family Documentation Support</li>
                        <li><i class="fa fa-check"></i> Executive Burnout Support</li>
                        <li><i class="fa fa-check"></i> Corporate Governance Training</li>
                        <li><i class="fa fa-check"></i> Workplace Restoration Training</li>
                        <li><i class="fa fa-check"></i> Employee Engagement Platforms</li>
                        <li><i class="fa fa-check"></i> AI Solutions for Business</li>
                        <li><i class="fa fa-check"></i> Digital Transformation Education</li>
                    </ul>
                    <a href="contact.html" class="thm-btn">Get Started</a>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="row">
            <div class="col-md-12">
                <div class="call-out">
                    <div class="float_left">
                        <h4>Ready to Transform Your HR Functions?</h4>
                    </div>
                    <div class="float_right">
                        <a href="contact.html" class="thm-btn style-3">Contact Us Today</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?> 