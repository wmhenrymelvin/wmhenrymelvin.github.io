# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing: static HTML/CSS/JS, deployed directly to GitHub Pages (wmhenrymelvin.github.io) with no build step. Redesign may self-host fonts/icons as static assets (no bundler required to deploy), but must not introduce an npm build the user has to run to publish future edits.

## Users

Engineering recruiters and hiring managers evaluating Henry Melvin for internships, broadly across manufacturing, mechanical, and industrial engineering roles (not defense-specific), plus secondary interest from data/analytics-adjacent reviewers given the Data Analytics section.

## Product Purpose

Personal portfolio for Henry Melvin, a sophomore studying Integrated Science and Technology (Manufacturing concentration, Global Supply Chain Management minor) at James Madison University. Exists to land a Summer 2027 engineering internship by showing real, hands-on project work, current internship experience, and certifications.

## Positioning

A hands-on manufacturing/engineering student with real fabrication and testing experience on physical hardware (servo/CNC throttle control system, inflatable medical transport systems, amphibious vehicle stability testing), plus self-directed range into software and data (a computer-vision bike-fit analyzer, Python data analysis) that a narrower single-discipline engineering portfolio would not show.

## Operating Context

JMU ISAT program (College of Integrated Science and Engineering). Current internship: Engineer Intern at Ryzing Technologies (Staunton, VA), designing/fabricating textile and inflatable systems for military-related Army/Navy applications, using CAD, CNC machines, mills, lathes, and industrial sewing equipment. Prior project work used Onshape CAD, Arduino/servo control, and Python (pandas/matplotlib/NLTK) for data analysis.

## Capabilities and Constraints

Static site; content is data-driven from JS arrays (`ENGINEERING_PROJECTS`, `DATA_PROJECTS`, `CERTIFICATIONS` in script.js) that render project cards and a step-by-step modal viewer automatically. This pattern must survive the redesign so future projects/certifications stay a matter of adding an array entry, not editing HTML. Real photos/videos are the evidence; no stock imagery.

## Brand Commitments

Name: Henry Melvin (goes by Henry). GitHub: wmhenrymelvin. Existing factual copy (bio, project descriptions, experience, "Why ISAT" content) is confirmed and should not be rewritten or have claims altered as part of a visual redesign.

## Evidence on Hand

Real project photos and videos in `images/` (fabrication, testing, product shots), `Resume.pdf`, verified Coursera/Onshape/DoD certification links, LinkedIn profile. State absence: no employer testimonials, no press coverage, no case-study metrics beyond what's already written into project steps.

## Product Principles

1. Every visual choice reads as deliberate, engineering-literate craft — not a generic AI-template aesthetic (the explicit reason for this redesign).
2. Preserve all factual content and project evidence exactly; only the visual world changes.
3. Keep the site zero-build to deploy: self-host any custom fonts/icons as static files checked into the repo, never require the user to run a build step to publish an edit.
4. Speak to engineering recruiters broadly (manufacturing/mechanical/industrial), not narrowly to defense-sector reviewers, even though several projects are defense-adjacent.

## Accessibility & Inclusion

No formal standard required. Preserve existing baseline: visible focus states, `prefers-reduced-motion` support, and body-text contrast at or above 4.5:1.
