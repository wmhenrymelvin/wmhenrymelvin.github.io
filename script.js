// =========================================================
// HENRY MELVIN PORTFOLIO — SCRIPT
//
// 🔧 TO ADD A NEW PROJECT: add an object to the PROJECTS
// array below. A card and its modal are generated
// automatically — no HTML editing required.
//
// 🔧 TO ADD A NEW CERTIFICATION: add an object to the
// CERTIFICATIONS array below ({ name, url, logo } — url is
// optional, omit or set to null if there isn't one; logo is
// also optional — path to an issuer badge image (e.g.
// "images/coursera-logo.png") shown next to the name,
// LinkedIn-style. Omit logo entirely if you don't have one.
// =========================================================

const ENGINEERING_PROJECTS = [
  {
    title: "Electronic Throttle Control System",
    thumbnail: "images/etc-thumbnail-wind-testing.png",
    description:
      "A servo-driven throttle control system built to control a wind " +
      "engine for military-related testing.",
    // 🔧 Step-by-step build story — shown in the project modal as a
    // scrollable, one-step-at-a-time viewer. Add/remove/reorder steps
    // freely; each needs a title, an image (or omit "image" for a
    // text-only step), and a description.
    steps: [
      {
        title: "Gauge Control Box",
        image: "images/etc-project-3.jpg",
        description:
          "Built with one other student — we split every stage of this " +
          "project together rather than dividing it by specialty, so " +
          "\"we\" below means both of us on the circuit design, the " +
          "fabrication, and the testing, not a stand-in for solo work. " +
          "We began by building a control box that consolidates " +
          "monitoring for the wind engine, wiring together analog gauges " +
          "for water temperature, oil pressure, and tachometer readings " +
          "into a single instrument panel. This gave us a reliable, " +
          "at-a-glance view of engine condition throughout testing — a " +
          "necessary foundation before layering any automated throttle " +
          "control on top of it.",
      },
      {
        title: "Circuit & Software Design",
        image: "images/etc-project-1.jpg",
        description:
          "With monitoring in place, we designed the control circuit and " +
          "logic behind the throttle itself. An Arduino reads wind speed " +
          "data from an SD card and converts it into a servo motion " +
          "profile, while also powering the control box's start/pause/" +
          "stop buttons and its onboard display — so a single board " +
          "handles the input data, the control logic, and the user " +
          "interface rather than treating them as separate systems. The " +
          "display shows the throttle's live position and progress in " +
          "real time during a test run.",
      },
      {
        title: "Engine Mount",
        image: "images/etc-project-2.jpg",
        description:
          "Next, we machined a mount to attach the throttle control " +
          "hardware directly to the engine, using CNC machines, mills, " +
          "band saws, and lathes. The initial mount design didn't hold up " +
          "as expected under real operating conditions, so we reworked " +
          "the approach — covered in the next few steps.",
      },
      {
        title: "Updated Control Box",
        image: "images/etc-control-box-v2.jpg",
        description:
          "We revised the control box to give us finer control during " +
          "testing: a dedicated screen, an SD card reader, and separate " +
          "start, pause, and stop buttons replaced the original " +
          "single-button setup. That let us pause a run mid-test without " +
          "resetting it entirely — a meaningful difference once you're " +
          "gathering repeatable data instead of just confirming the " +
          "system runs.",
      },
      {
        title: "Control Box Wiring",
        image: "images/etc-control-box-wiring.jpg",
        description:
          "Behind the panel: the relays, fuse block, and Arduino that " +
          "power the gauges and handle the new start/pause/stop controls. " +
          "Keeping this wiring organized and clearly labeled mattered as " +
          "much as the circuit design itself, since this box needed to be " +
          "serviceable and easy to troubleshoot in the field, not just on " +
          "a bench.",
      },
      {
        title: "Servo & Gearbox Upgrade",
        images: [
          "images/etc-servo-gearbox.jpg",
          "images/etc-gearbox-mount-closeup.jpg",
        ],
        description:
          "We also revised the servo layout, adding a gearbox to increase " +
          "output torque, and redesigning the coupler/head mount so it " +
          "could reliably hold the wire that pulls the throttle. On the " +
          "left, the servo and gearbox assembly on its own; on the right, " +
          "the same assembly mounted to the engine frame on rubber " +
          "isolators, which absorb vibration so the linkage doesn't " +
          "fatigue or slip during operation.",
      },
      {
        title: "Limit Switches in Action",
        video: "images/etc-limit-switch-v2.mp4",
        description:
          "Finally, we added limit switches to physically stop the " +
          "throttle plate at each end of its travel, preventing the servo " +
          "from over-driving the linkage and damaging the throttle body. " +
          "Since the switches themselves are small and largely enclosed " +
          "within the assembly, video captures their behavior far more " +
          "clearly than a still photo — watch the throttle plate reach " +
          "full travel and trigger the switch in real time.",
      },
      {
        title: "Real-World Application: Wind Testing",
        image: "images/etc-thumbnail-wind-testing.png",
        description:
          "This system's real testing ground looks like this — airboat " +
          "engines mounted in front of a wall of material, generating " +
          "sustained, controlled airflow to validate a design's wind " +
          "resistance rating. Holding an engine at a specific RPM for the " +
          "length of a test run used to mean someone manually working the " +
          "throttle by hand for hours at a time, with all the " +
          "inconsistency that introduces. With this system, the same SD " +
          "card that stores wind-speed data also stores an RPM profile " +
          "for a given test, and the Arduino reads that profile directly " +
          "off the card and translates it into servo movement — holding " +
          "the exact RPM called for, for exactly as long as the test " +
          "requires, without anyone touching the throttle. That's a big " +
          "part of the point of the whole project: replacing hours of " +
          "manual throttle work with a system that holds a precise, " +
          "repeatable RPM automatically, so results are consistent from " +
          "run to run instead of depending on how steady someone's hand " +
          "was that day.",
      },
    ],
  },
  {
    title: "SWIFT",
    thumbnail: "images/swift-multi-cpu-docking.jpg",
    description: "Severe Weather Infield Transport",
    steps: [
      {
        title: "What It Is",
        images: ["images/swift-ccp-product.png", "images/swift-cpu-product.png"],
        // 🔧 UPDATE: swap in your own SWIFT photos here whenever you have them
        description:
          "SWIFT stands for Severe Weather Infield Transport. It's built " +
          "around two connected components, both made of air beams — " +
          "inflatable structural tubes — so they pack down small in " +
          "storage but hold real structural load once inflated. On the " +
          "left, the CCP (Casualty Collection Point): a self-erecting " +
          "shelter that sets up in under 45 seconds with only 1-2 " +
          "operators, docks up to four CPUs at once, and is rated from " +
          "-40°F to +120°F with a 100 mph wind-resistance rating. On the " +
          "right, the CPU (Casualty Protection Unit): an individual " +
          "inflatable stretcher that deploys in under 45 seconds — even " +
          "with a patient already on the ground — weighs about 15.5 lbs, " +
          "and supports over 400 lbs of load. Its suspended hammock holds " +
          "the torso at roughly a 30° angle to reduce aspiration risk, " +
          "with 5 layers of insulation and a waterproof outer skin. The " +
          "two aren't separate products but one workflow: a CPU deploys " +
          "directly beneath an injured person at the point of injury, " +
          "then transports and docks into a CCP, keeping thermal and " +
          "environmental protection intact the whole time instead of " +
          "exposing the patient during transfer. Because a single CCP can " +
          "dock up to four CPUs, this scales cleanly from one casualty to " +
          "organized multi-patient triage.",
      },
      {
        title: "Airbeams & Circumferentials",
        image: "images/swift-airbeam-components.jpg",
        description:
          "My role covered a few stages of this build. I helped " +
          "fabricate several of the air beams themselves, and documented " +
          "the process step by step with written instructions and photos " +
          "so it could be repeated consistently. I also helped design the " +
          "circumferentials — the straps that wrap around the CCP and " +
          "CPU — with an eye toward making them easy to manufacture " +
          "repeatably, then rebuilt them in Onshape and produced " +
          "engineering drawings in isometric, wrapped, and flat views. " +
          "From there I sewed the individual pieces together into " +
          "finished straps and fitted them onto the CCP and CPU. Over the " +
          "course of the project we built 5 complete sets and " +
          "standardized the process to make it faster and more " +
          "consistent going forward.",
      },
      {
        title: "Circumferential Straps, Sewn",
        images: [
          "images/swift-circumferential-strap-unfolded.jpg",
          "images/swift-circumferential-strap-buckle.jpg",
        ],
        description:
          "A closer look at the circumferentials themselves, from a " +
          "single sewn strip through to a finished strap fitted with its " +
          "buckle hardware — the same repeatable, sewable pattern " +
          "referenced above, made real.",
      },
      {
        title: "The Finished CCP & CPU",
        images: [
          "images/swift-ccp-cpu-assembled.jpg",
          "images/swift-ccp-multi-module.jpg",
        ],
        description:
          "The CPU stretcher and CCP shelter in the shop, inflated and " +
          "assembled — one of the 5 complete sets from this build cycle, " +
          "and the multi-module CCP docking configuration described above.",
      },
    ],
  },
  {
    title: "ISAS",
    thumbnail: "images/isas-hanging-forklift-cage.jpg",
    // 🔧 UPDATE: fill in what ISAS stands for once you have it
    description:
      "Testing and support-structure design for a military ACV, using " +
      "deployable air beams to keep it from tipping over in shallow " +
      "surf.",
    steps: [
      {
        title: "What It Is",
        image: "images/isas-model-shop.jpg",
        description:
          "Our team was tasked with designing supports for an ACV " +
          "(Amphibious Combat Vehicle) for the military. The problem: as " +
          "an ACV transitions from ship to sea to beach, it passes " +
          "through a 3-5 ft water depth range where it has a real chance " +
          "of tipping over. Our solution was a set of air beams mounted " +
          "on the sides of the vehicle that deploy automatically — " +
          "triggered by a sensor on the ACV that tracks its position — " +
          "right as it starts to tip, to stop it from going over. To " +
          "test the concept, our team built a 1/8-scale model of the ACV " +
          "out of metal, complete with scaled-down support beams " +
          "matching the full-size design.",
      },
      {
        title: "Building the Model",
        image: "images/isas-model-full-view.jpg",
        description:
          "Building an accurate scale model meant more than just getting " +
          "the shape right — the weight distribution had to be " +
          "realistic too. We added weights both inside the hull and on " +
          "the lid to replicate the difference between crew-loaded " +
          "weight and gross vehicle weight, since where that weight sits " +
          "changes how the vehicle actually behaves in water. Without " +
          "that distinction, the model's tipping behavior wouldn't " +
          "reliably reflect the full-size ACV's.",
      },
      {
        title: "Finding the Center of Gravity",
        image: "images/isas-hanging-forklift-cage.jpg",
        description:
          "To find the model's center of gravity, we suspended it from " +
          "the ceiling using a 22-foot rope and a custom mount, then " +
          "checked it carefully to confirm there was no tilt once it " +
          "settled. A model hanging perfectly level, with no lean in any " +
          "direction, confirms the suspension point lines up with the " +
          "center of gravity — a necessary reference point before any of " +
          "the rotational testing that followed.",
      },
      {
        title: "My Role: Testing",
        image: "images/isas-leveling-check.jpg",
        description:
          "My job on this project was testing. Once the model hung level, " +
          "we built a torsion pendulum around it to measure its moment of " +
          "inertia and radius of gyration — properties that describe how " +
          "the vehicle resists and responds to rotation. Those results " +
          "get compared directly against the military's own figures for " +
          "the full-size ACV, both to validate the scale model itself and " +
          "to serve as a reference for further testing down the line, " +
          "including the wave pool testing we ran afterward with the " +
          "miniature air beam attached.",
      },
    ],
  },
  {
    title: "AI Bike Fit Analyzer",
    thumbnail: "images/bike-fit-thumbnail-v2.jpg",
    description:
      "An AI tool that grades a road bike fit from a single phone video.",
    steps: [
      {
        title: "What It Does",
        video: "images/bike-fit-overlay-v2.mp4",
        description:
          "A \"bike fit\" is the process of adjusting a bike — seat " +
          "height, handlebar position, and more — to match the rider's " +
          "body, so they're comfortable and efficient without straining a " +
          "joint. It's normally checked in person with specialized " +
          "equipment. This project checks it instead from a single phone " +
          "video: the clip above is it running live on my own pedal " +
          "stroke, with a color-coded skeleton locking onto my knee, hip, " +
          "shoulder, and elbow in real time as I ride.",
      },
      {
        title: "The Models Behind It",
        image: "images/yolo11-model-variants.png",
        description:
          "Built on Ultralytics' open-source YOLO11 " +
          "(github.com/ultralytics/ultralytics), using two of its model " +
          "types together: a pose model, which tracks specific joints on " +
          "your body like a skeleton, and a segmentation model, which " +
          "traces the full outline of your body pixel by pixel. Using " +
          "both keeps the tracking locked on even through the motion " +
          "blur of a full pedal stroke. Once the joints are found, the " +
          "tool measures the angles they form and compares them to real " +
          "bike-fit industry ranges — the same targets a professional " +
          "fitter checks by hand — grading each one green, amber, or red.",
      },
      {
        title: "The Key Frame",
        image: "images/bike-fit-bdc-still.jpg",
        description:
          "Every joint angle is graded at one specific moment in the " +
          "pedal stroke called bottom-dead-center — the point where your " +
          "knee is at its most extended, shown here. That's the same " +
          "moment a professional fitter would check by eye. Instead of " +
          "relying on one lucky screenshot, the tool automatically finds " +
          "this exact moment in every single pedal stroke across the " +
          "whole video — 45 of them in this run — and grades off the " +
          "typical value across all of them, so one awkward stroke can't " +
          "throw off the result.",
      },
      {
        title: "How It Works",
        description:
          "In plain terms: the tool watches the video and figures out " +
          "where your joints are in every frame, using the YOLO11 models " +
          "described above. From there, it's just geometry — measuring " +
          "the angle between three points (like hip-knee-ankle) frame by " +
          "frame using Python. The tricky part was picking the right " +
          "moment to measure, since any single frame can be a little " +
          "off. So instead of trusting one frame, it tracks your knee " +
          "angle across the whole ride, automatically finds every pedal " +
          "stroke on its own, and uses the typical angle across all of " +
          "them — so one awkward stroke doesn't throw off the grade.",
      },
      {
        title: "Results",
        description:
          "Ran it on my own fit: knee flexion, torso angle, and shoulder " +
          "angle all graded green — saddle height and reach were already " +
          "close to right. Elbow angle graded red at about 4°, " +
          "essentially locked out against a 15-30° target, flagging a " +
          "reach/cockpit adjustment I wouldn't have caught by feel. Hip " +
          "angle came back amber, just outside the target range.",
        table: {
          headers: ["Angle", "Measured", "Target", "Grade"],
          rows: [
            ["Knee flexion (BDC)", "39°", "30-40°", "good"],
            ["Torso from horizontal", "47°", "40-50°", "good"],
            ["Elbow flexion", "4°", "15-30°", "fail"],
            ["Shoulder angle", "86°", "80-95°", "good"],
            ["Hip angle (top)", "113°", "85-110°", "watch"],
          ],
        },
      },
    ],
  },
  {
    title: "Analog Line-Tracking Robot",
    description:
      "An autonomous robot that follows a track using analog sensor " +
      "feedback.",
    steps: [
      {
        title: "Overview",
        description:
          "More details on this project, including how it works and the " +
          "build process, are coming soon.",
      },
    ],
  },
  // 🔧 UPDATE: add your next project here, e.g.
  // {
  //   title: "Project Name",
  //   description: "One or two sentence overview shown on the card.",
  //   steps: [
  //     { title: "Step name", image: "images/photo.jpg", description: "What happened in this step." },
  //     { title: "Step name", video: "images/clip.mp4", description: "Use video instead of image if you have a clip for this step." },
  //   ],
  // },
];

// 🔧 Data Analytics projects — same format as ENGINEERING_PROJECTS above.
// Add your first entry here whenever you're ready; the section already
// renders and links up automatically, no HTML editing needed.
const DATA_PROJECTS = [
  {
    title: "NYC Airbnb Market Analysis",
    tag: "Cleaning",
    description:
      "Cleaned messy real-world rental listing data and analyzed it to " +
      "find pricing trends across New York City.",
    steps: [
      {
        title: "The Business Question",
        description:
          "The goal of this analysis was to understand the structure of " +
          "the NYC Airbnb rental market: what listings typically cost, " +
          "how much that cost varies, and which types of rentals — " +
          "entire homes, private rooms, hotel rooms, or shared rooms — " +
          "make up the market. Questions like this matter to hosts " +
          "deciding how to price a new listing and to analysts tracking " +
          "how a market is shifting over time.",
      },
      {
        title: "Cleaning the Data",
        description:
          "The raw dataset came from Inside Airbnb's public NYC listings " +
          "export. Before any analysis could happen, the data needed real " +
          "cleanup: the price column arrived as text with dollar signs " +
          "and commas (e.g. \"$1,200\"), so I stripped that formatting and " +
          "converted it to a numeric type. Room type labels had " +
          "inconsistent casing, so I standardized them, and I removed " +
          "listings with missing price data rather than let them " +
          "distort the summary statistics. In a dataset this size, data " +
          "cleaning was the majority of the actual work — the analysis " +
          "itself only works if the underlying data is trustworthy.",
        code:
`import pandas as pd

listings = pd.read_csv('listings.csv')

# Convert price from text ("$1,200") to a numeric type
listings['price'] = (
    listings['price']
    .astype(str)
    .str.replace('$', '', regex=False)
    .str.replace(',', '', regex=False)
    .astype(float)
)

# Standardize room type labels
listings['room_type'] = listings['room_type'].str.lower()

# Drop rows with missing price data
listings = listings.dropna(subset=['price'])

listings.to_csv('nyc_airbnb_cleaned.csv', index=False)`,
      },
      {
        title: "Listings by Room Type",
        image: "images/airbnb-room-type-chart.png",
        description:
          "Across 21,515 listings, entire homes/apartments make up 53.6% " +
          "of the market and private rooms make up 43.3%, with hotel " +
          "rooms and shared rooms together accounting for just 3.1%. That " +
          "tells a clear story: NYC's Airbnb market is overwhelmingly " +
          "built around renting whole spaces or private rooms within a " +
          "home, not shared or hotel-style accommodations.",
        code:
`listings['room_type'].value_counts()

import matplotlib.pyplot as plt

listings['room_type'].value_counts().plot(kind='bar')
plt.title('NYC Airbnb Listings by Room Type')
plt.show()`,
      },
      {
        title: "Pricing Patterns",
        image: "images/airbnb-price-distribution.png",
        description:
          "The average nightly price came out to $278.23, but that number " +
          "is pulled upward by a small number of extreme luxury " +
          "listings — prices in the dataset range from $4.58 to as high " +
          "as $30,972.96 a night. The median price, $174.69, is a more " +
          "realistic picture of what a typical listing actually costs, " +
          "since it isn't distorted by those outliers. Recognizing when " +
          "the mean is misleading and the median tells the real story is " +
          "a basic but important judgment call in any pricing analysis.",
        code:
`listings['price'].mean()
listings['price'].median()
listings['price'].min()
listings['price'].max()`,
      },
      {
        title: "Tools & Takeaways",
        description:
          "Built entirely in Python with Pandas for data cleaning and " +
          "aggregation, and Matplotlib for visualization, in Google " +
          "Colab. Beyond the specific findings, this project was a good " +
          "reminder that most of the value in a data analysis comes " +
          "before the charts get made — in deciding how to handle " +
          "messy formatting, missing values, and outliers so the " +
          "numbers you report are actually trustworthy.",
      },
    ],
  },
  {
    title: "Word Frequency Analysis — Classic Novels",
    tag: "Scraping",
    description:
      "Pulled the full text of a novel straight from a website and " +
      "counted word frequency to find its most common meaningful words.",
    steps: [
      {
        title: "The Business Question",
        description:
          "The goal here was to see what word frequency can reveal about " +
          "a text's themes: what are the most frequently used meaningful " +
          "words in a classic novel, once common filler words like " +
          "\"the,\" \"and,\" and \"of\" are removed from consideration? For " +
          "this project I used Moby Dick, pulled directly from Project " +
          "Gutenberg's public domain library.",
      },
      {
        title: "Scraping the Text",
        description:
          "Rather than downloading a text file by hand, I pulled the " +
          "novel's full HTML page directly from Project Gutenberg using " +
          "requests, then used BeautifulSoup to strip out all the HTML " +
          "markup and extract just the readable text of the book. " +
          "Scraping a live web page instead of working from a pre-cleaned " +
          "file is closer to how this kind of data collection actually " +
          "works in practice, where the source isn't handed to you in a " +
          "convenient format.",
        code:
`import requests
from bs4 import BeautifulSoup

url = 'https://www.gutenberg.org/files/2701/2701-h/2701-h.htm'
response = requests.get(url)
html = response.text

soup = BeautifulSoup(html, 'html.parser')
text = soup.get_text()`,
      },
      {
        title: "Cleaning & Counting",
        description:
          "The raw scraped text still included capitalization, " +
          "punctuation, and extremely common words like \"the\" and " +
          "\"and\" that would dominate any word-frequency count without " +
          "actually saying anything about the book's content. I " +
          "lowercased everything, stripped out punctuation and symbols " +
          "with a regular expression, and removed standard English " +
          "\"stopwords\" using NLTK's built-in stopword list before " +
          "counting how often each remaining word appeared.",
        code:
`import re
import nltk
from nltk.corpus import stopwords
from collections import Counter

nltk.download('stopwords')

text = text.lower()
text = re.sub(r'[^a-z\\s]', '', text)
words = text.split()

stop_words = set(stopwords.words('english'))
filtered_words = [word for word in words if word not in stop_words]

word_counts = Counter(filtered_words)
most_common = word_counts.most_common(10)`,
      },
      {
        title: "Key Findings",
        image: "images/moby-dick-word-frequency-v2.png",
        description:
          "\"Whale\" was, unsurprisingly, the most frequent meaningful " +
          "word in Moby Dick, appearing 962 times — followed by \"one\" " +
          "(891), \"like\" (575), and \"upon\" (565). \"Ahab,\" the " +
          "captain's name, cracks the top 10 at 421 mentions, right " +
          "alongside \"ye,\" reflecting the novel's period-accurate " +
          "dialogue. Even a simple word count like this reflects real " +
          "structure in the text — a whaling obsession and a distinctive " +
          "narrative voice both show up clearly in the numbers alone.",
        code:
`import pandas as pd

results_df = pd.DataFrame(most_common, columns=['word', 'count'])
results_df.to_csv('moby_dick_word_frequency.csv', index=False)

import matplotlib.pyplot as plt

results_df.plot(kind='bar', x='word', y='count', legend=False)
plt.title('Top 10 Most Frequent Words in Moby Dick')
plt.ylabel('Count')
plt.show()`,
      },
      {
        title: "Tools & Takeaways",
        description:
          "Built in Python with requests and BeautifulSoup for web " +
          "scraping, NLTK for stopword filtering, Pandas for organizing " +
          "the results, and Matplotlib for the chart, all in Google " +
          "Colab. This project is a smaller-scale companion to the NYC " +
          "Airbnb analysis above — together they show the same core " +
          "skill set applied to two different kinds of raw data: a " +
          "structured CSV export versus unstructured text scraped " +
          "directly from a live web page.",
      },
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Microsoft 365 Fundamentals", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6HR36GN5Q0J", logo: "images/microsoft-logo.png" },
  { name: "Accelerate Your Job Search with AI", url: "https://www.coursera.org/account/accomplishments/verify/J43QSC4F2TE9", logo: "images/google-logo.jpg" },
  { name: "Work Smarter with Microsoft Excel", url: "https://www.coursera.org/account/accomplishments/verify/496YHGNSSS4T", logo: "images/microsoft-logo.png" },
  { name: "Work Smarter with Microsoft PowerPoint", url: "https://www.coursera.org/account/accomplishments/verify/EVYEM2WPS5MF", logo: "images/microsoft-logo.png" },
  { name: "Work Smarter with Microsoft Word", url: "https://www.coursera.org/account/accomplishments/verify/BBJ6FHI0D4O1", logo: "images/microsoft-logo.png" },
  { name: "Google Project Management", url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/1TM7194JJ38K", logo: "images/google-logo.jpg" },
  { name: "Foundations: Data, Data, Everywhere", url: "https://www.coursera.org/account/accomplishments/verify/FJUBJE7NJ1FX", logo: "images/google-logo.jpg" },
  { name: "Onshape: Introduction to Sketching", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-d677522e-647f-4c1e-ba1c-b41c1d6c0a59-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Introduction to Part Studios", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-ac12808f-e899-4eaf-8483-b6a6b0a27ba4-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Introduction to Assemblies", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-9518e26c-d321-4dc8-8db9-151d38dc6939-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Introduction to 2D Drawings", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-0edfade4-605b-42ae-ae95-cc66399417c2-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Onshape: Direct Editing", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-343dd4f6-e626-465e-8b62-fa46ca46cb36-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Understanding Curves", url: "https://ti-user-certificates.s3.amazonaws.com/6e557ed6-d03d-4c48-9492-4d18d145d7a1/d7120f61-72c7-4c0f-9478-cac118956c7a-henry-melvin-43042ac5-33f4-4f4f-a3a9-99dc5bb21051-certificate.pdf", logo: "images/onshape-logo.png" },
  { name: "Mandatory Controlled Unclassified Information", url: "images/cui-certificate.jpg", logo: "images/dod-logo.jpg" },
];

// Known grade tokens a table cell can carry — rendered as a lamp dot
// instead of raw text. Anything else in a cell renders as plain text.
const GRADE_LAMPS = {
  good: { className: '', label: 'Good' },
  watch: { className: 'grade-cell--amber', label: 'Watch' },
  fail: { className: 'grade-cell--red', label: 'Fail' },
};

function renderTableCell(cell) {
  const grade = GRADE_LAMPS[cell];
  if (!grade) return cell;
  return `<span class="grade-cell ${grade.className}"><span class="lamp-dot" aria-hidden="true"></span>${grade.label}</span>`;
}

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Render certifications ---- */
  const certGrid = document.getElementById('certGrid');
  CERTIFICATIONS.forEach(cert => {
    const el = document.createElement(cert.url ? 'a' : 'div');
    el.className = 'cert-card';
    if (cert.url) {
      el.href = cert.url;
      el.target = '_blank';
      el.rel = 'noopener';
    }
    if (cert.logo) {
      const logoImg = document.createElement('img');
      logoImg.src = cert.logo;
      logoImg.alt = '';
      logoImg.loading = 'lazy';
      logoImg.decoding = 'async';
      logoImg.className = 'cert-card-logo';
      el.appendChild(logoImg);
    }
    const nameSpan = document.createElement('span');
    nameSpan.textContent = cert.name;
    el.appendChild(nameSpan);
    certGrid.appendChild(el);
  });

  /* ---- Render project cards + wire up modal ---- */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalStepTitle = document.getElementById('modalStepTitle');
  const modalStepImage = document.getElementById('modalStepImage');
  const modalStepVideo = document.getElementById('modalStepVideo');
  const modalStepImagesRow = document.getElementById('modalStepImagesRow');
  const modalStepDesc = document.getElementById('modalStepDesc');
  const modalStepTable = document.getElementById('modalStepTable');
  const modalStepCode = document.getElementById('modalStepCode');
  const modalStepCodeText = document.getElementById('modalStepCodeText');
  const modalStepDots = document.getElementById('modalStepDots');
  const modalStepPrev = document.getElementById('modalStepPrev');
  const modalStepNext = document.getElementById('modalStepNext');
  const modalStepViewer = document.getElementById('modalStepViewer');

  let activeSteps = [];
  let activeStepIndex = 0;

  function renderStep() {
    const step = activeSteps[activeStepIndex];
    if (!step) return;

    modalStepTitle.textContent = step.title || '';

    // Always pause and clear the video first so a playing clip doesn't
    // keep making noise/progress after you've stepped away from it.
    modalStepVideo.pause();
    modalStepVideo.removeAttribute('src');
    modalStepVideo.load();
    modalStepVideo.style.display = 'none';
    modalStepImage.style.display = 'none';
    modalStepImagesRow.style.display = 'none';
    modalStepImagesRow.innerHTML = '';

    if (step.images && step.images.length) {
      modalStepImagesRow.innerHTML = step.images
        .map(src => `<img src="${src}" alt="${step.title || ''}">`)
        .join('');
      modalStepImagesRow.style.display = 'flex';
    } else if (step.video) {
      modalStepVideo.src = step.video;
      modalStepVideo.style.display = 'block';
    } else if (step.image) {
      modalStepImage.src = step.image;
      modalStepImage.alt = step.title || '';
      modalStepImage.style.display = 'block';
    }

    modalStepDesc.textContent = step.description;

    // Optional data table — e.g. { headers: [...], rows: [[...], ...] }.
    // A cell whose value is one of the known grade tokens renders as a
    // lamp dot + label instead of raw text (see GRADE_LAMPS below).
    if (step.table && step.table.rows && step.table.rows.length) {
      const theadHtml = step.table.headers
        ? `<thead><tr>${step.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`
        : '';
      const tbodyHtml = `<tbody>${step.table.rows
        .map(row => `<tr>${row.map(cell => `<td>${renderTableCell(cell)}</td>`).join('')}</tr>`)
        .join('')}</tbody>`;
      modalStepTable.innerHTML = `<table>${theadHtml}${tbodyHtml}</table>`;
      modalStepTable.style.display = 'block';
    } else {
      modalStepTable.innerHTML = '';
      modalStepTable.style.display = 'none';
    }

    // Optional code snippet — plain string, rendered verbatim in a code block
    if (step.code) {
      modalStepCodeText.textContent = step.code;
      modalStepCode.style.display = 'block';
    } else {
      modalStepCodeText.textContent = '';
      modalStepCode.style.display = 'none';
    }

    modalStepDots.innerHTML = activeSteps
      .map((_, i) => `<button type="button" class="step-dot${i === activeStepIndex ? ' is-active' : ''}" data-index="${i}" aria-label="Go to step ${i + 1}"></button>`)
      .join('');

    modalStepPrev.disabled = activeStepIndex === 0;
    modalStepNext.disabled = activeStepIndex === activeSteps.length - 1;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goToStep(index) {
    if (index < 0 || index >= activeSteps.length) return;
    if (prefersReducedMotion) {
      activeStepIndex = index;
      renderStep();
      return;
    }
    // Crossfade: fade the current step out, swap content while invisible,
    // then fade the new step in.
    modalStepViewer.classList.add('is-transitioning');
    window.setTimeout(() => {
      activeStepIndex = index;
      renderStep();
      modalStepViewer.classList.remove('is-transitioning');
    }, 160);
  }

  modalStepDots.addEventListener('click', (e) => {
    const dot = e.target.closest('.step-dot');
    if (dot) goToStep(Number(dot.dataset.index));
  });
  modalStepPrev.addEventListener('click', () => goToStep(activeStepIndex - 1));
  modalStepNext.addEventListener('click', () => goToStep(activeStepIndex + 1));

  function openModal(project) {
    if (project.steps && project.steps.length) {
      activeSteps = project.steps;
      activeStepIndex = 0;
      renderStep();
      modalStepViewer.style.display = 'block';
    } else {
      activeSteps = [];
      modalStepViewer.style.display = 'none';
    }

    modalOverlay.classList.add('is-open');
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('is-open');
    modalStepVideo.pause();
  }

  const ARROW_RIGHT_ICON = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>';

  function renderProjectGrid(gridEl, projects) {
    projects.forEach(project => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'module-card';
      const thumbHtml = project.thumbnail
        ? `<img class="module-card-thumb" src="${project.thumbnail}" alt="${project.title}" loading="lazy" decoding="async">`
        : '';
      const tagHtml = project.tag
        ? `<span class="module-card-tag">${project.tag}</span>`
        : '';
      card.innerHTML = `
        ${thumbHtml}
        <div class="module-card-body">
          ${tagHtml}
          <span class="module-card-title">${project.title}</span>
          <span class="module-card-desc">${project.description}</span>
          <span class="module-card-cta">View details ${ARROW_RIGHT_ICON}</span>
        </div>
      `;
      card.addEventListener('click', () => openModal(project));
      gridEl.appendChild(card);
    });

    const placeholder = document.createElement('div');
    placeholder.className = 'module-card module-card--placeholder';
    placeholder.innerHTML = `<span>More modules coming soon</span>`;
    gridEl.appendChild(placeholder);
  }

  renderProjectGrid(document.getElementById('engineeringProjectGrid'), ENGINEERING_PROJECTS);
  renderProjectGrid(document.getElementById('dataProjectGrid'), DATA_PROJECTS);

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (!modalOverlay.classList.contains('is-open')) return;
    if (e.key === 'ArrowRight') goToStep(activeStepIndex + 1);
    if (e.key === 'ArrowLeft') goToStep(activeStepIndex - 1);
  });

  /* ---- Nav: each switch lights up, plus an indicator bar that
     slides to sit under whichever one is active; explicit smooth
     scroll, scroll-spy ---- */
  const switchButtons = document.querySelectorAll('.switch');
  const sections = document.querySelectorAll('section.plate');
  const navHeight = document.querySelector('.switchboard').offsetHeight;
  const navIndicator = document.querySelector('.nav-indicator');

  let isClickScrolling = false;
  let clickScrollTimeout = null;
  let activeSectionId = null;
  let indicatorFrame = null;

  function moveIndicator(btn) {
    if (!btn || !navIndicator) return;
    // Read the layout values and write the transform inside the same
    // animation frame, batched via rAF, so a burst of setActive() calls
    // (e.g. the observer flickering between two sections right at the
    // bottom of the page) can't force a synchronous layout read on
    // every call while the user is mid-scroll.
    if (indicatorFrame) cancelAnimationFrame(indicatorFrame);
    indicatorFrame = requestAnimationFrame(() => {
      // translateY too, not just translateX: when the switch bank wraps
      // to a second row, the active switch isn't necessarily in the
      // same row the indicator's static CSS position would assume.
      const y = btn.offsetTop + btn.offsetHeight + 3;
      navIndicator.style.transform = `translate(${btn.offsetLeft}px, ${y}px) scaleX(${btn.offsetWidth})`;
      indicatorFrame = null;
    });
  }

  function setActive(id) {
    if (id === activeSectionId) return;
    activeSectionId = id;
    switchButtons.forEach(b => {
      b.classList.toggle('is-active', b.dataset.section === id);
    });
    moveIndicator(document.querySelector('.switch.is-active'));
  }

  // Explicit smooth scroll on click, with the active switch lit
  // immediately (rather than waiting on scroll-spy), so the lamp
  // never sits in a half-updated state while the page is moving.
  switchButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.dataset.section;
      const target = document.getElementById(targetId);
      if (!target) return;

      setActive(targetId);

      isClickScrolling = true;
      clearTimeout(clickScrollTimeout);

      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Release the scroll-spy lock once the scroll animation
      // has had time to finish.
      clickScrollTimeout = setTimeout(() => { isClickScrolling = false; }, 900);
    });
  });

  // Scroll-spy: highlight whichever section is most visible,
  // but only when the user is scrolling manually (not mid-click-scroll).
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (isClickScrolling) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  // The last section is often shorter than the rootMargin band above, so
  // it can never cleanly satisfy it - right at the bottom of the page the
  // observer has nothing stable to land on and can flicker between the
  // last two sections on every tiny scroll adjustment. Once the page is
  // within a few pixels of its true bottom, just force the last section
  // active and skip the observer's math entirely.
  let bottomCheckFrame = null;
  window.addEventListener('scroll', () => {
    if (bottomCheckFrame) return;
    bottomCheckFrame = requestAnimationFrame(() => {
      bottomCheckFrame = null;
      if (isClickScrolling || !sections.length) return;
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(sections[sections.length - 1].id);
    });
  }, { passive: true });

  // Keep the indicator aligned through font load, resize, and wrap changes.
  window.addEventListener('load', () => moveIndicator(document.querySelector('.switch.is-active')));
  window.addEventListener('resize', () => moveIndicator(document.querySelector('.switch.is-active')));
  moveIndicator(document.querySelector('.switch.is-active'));

  /* ---- Reveal on scroll (and once, on load, for the hero) ---- */
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealTargets = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(target => revealObserver.observe(target));
  } else {
    document.querySelectorAll('.reveal').forEach(target => target.classList.add('is-visible'));
  }

});
