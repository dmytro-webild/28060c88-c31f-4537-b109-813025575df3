"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="large"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Programs",
          id: "programs",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="JF Fitness"
      button={{
        text: "Book Session",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="JF Personal Trainer"
      description="Transform Your Body, Reclaim Your Health. Certified personal training tailored to your goals in Bengaluru. Whether you're building strength, losing weight, or recovering from injury, I'll guide you every step with proven methods."
      buttons={[
        {
          text: "Book Your Free Consultation",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-pink-top-standing-with-coach_1157-32123.jpg"
      imageAlt="Professional fitness coaching transformation"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Your Goals, My Methods"
      description="With years of expertise in Bengaluru, I bridge the gap between corporate demands and peak performance. We don't just train; we strategize a sustainable lifestyle suited to your pace."
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-friends-reading-messages_23-2150104787.jpg"
      imageAlt="Certified trainer working with client"
    />
  </div>

  <div id="programs" data-section="programs">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Data-Driven Strength",
          tags: [
            "Strength",
            "Data",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-stands-outdoor-gym-with-phone_140725-16401.jpg",
        },
        {
          id: "f2",
          title: "Custom Nutrition",
          tags: [
            "Diet",
            "Custom",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-nutrition-food-meal-planning_23-2149074218.jpg",
        },
        {
          id: "f3",
          title: "Injury Recovery",
          tags: [
            "Wellness",
            "Safety",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/doing-push-ups-modern-gym_1098-14891.jpg",
        },
      ]}
      title="Comprehensive Coaching"
      description="Personalized pathways to help you hit your peak safely and effectively."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "₹15,000/mo",
          subtitle: "Foundation building",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "Bi-weekly checkins",
            "Personalized routine",
          ],
        },
        {
          id: "pro",
          badge: "Optimal",
          price: "₹25,000/mo",
          subtitle: "Full transformation",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "Weekly updates",
            "Nutrition tracking",
            "Recovery plan",
          ],
        },
      ]}
      title="Flexible Training Plans"
      description="Invest in your health with clear, results-oriented training packages."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Marketing Lead",
          company: "Tech Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-latin-people-training-outdoors_23-2151039465.jpg",
        },
        {
          id: "2",
          name: "Rahul M.",
          role: "Engineer",
          company: "Global Sol",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-beautiful-woman-doing-sports-morning-park_285396-4310.jpg",
        },
        {
          id: "3",
          name: "Priya K.",
          role: "Manager",
          company: "StartUp Labs",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-runner-looking-camera_23-2148162136.jpg",
        },
        {
          id: "4",
          name: "Vikram S.",
          role: "Consultant",
          company: "Strategy Co",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fit-young-girl-sportswear-celebrating_23-2148324830.jpg",
        },
        {
          id: "5",
          name: "Ananya D.",
          role: "HR Director",
          company: "PeopleInc",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-dancing-studio_23-2150621031.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "200+",
          label: "Clients Helped",
        },
        {
          value: "500kg+",
          label: "Total Weight Lost",
        },
        {
          value: "95%",
          label: "Retention Rate",
        },
      ]}
      title="Real Bengaluru Success Stories"
      description="Hear from professionals who reclaimed their health."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "12+",
          title: "Years Experience",
          description: "Expert guidance",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-sportswoman-making-her-exercise-plan-digital-tablet-while-having-sports-training-fitness-center_637285-388.jpg",
        },
        {
          id: "m2",
          value: "100%",
          title: "Personalization",
          description: "Tailored approach",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-presentation-office-pandemic-with-mask_23-2148666344.jpg",
        },
        {
          id: "m3",
          value: "30min",
          title: "Fast Recovery",
          description: "Proven protocols",
          imageSrc: "http://img.b2bpic.net/free-photo/freelance-accountant-analyzing-charts_1262-5053.jpg",
        },
      ]}
      title="Proven Impact"
      description="Quantifiable results, tailored for you."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to begin your journey? Book your free consultation today and let's map out your path to health."
      buttons={[
        {
          text: "Book Consultation",
          href: "https://calendar.link",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Programs",
              href: "#programs",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="JF Fitness"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
