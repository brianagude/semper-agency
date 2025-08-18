import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudyDetail } from "@/components/case-study-detail"
import { notFound } from "next/navigation"

const caseStudies = {
  "techstart-solutions": {
    title: "TechStart Solutions",
    subtitle: "Transforming a Tech Startup's Digital Presence",
    image: "/case-study-techstart-hero.png",
    overview: {
      company: "TechStart Solutions",
      industry: "B2B SaaS",
      size: "50-100 employees",
      timeline: "6 months",
    },
    challenge:
      "TechStart Solutions was struggling with low social media engagement and poor brand visibility. Despite having innovative products, they couldn't effectively communicate their value proposition to their target audience, resulting in minimal lead generation from their digital marketing efforts.",
    ingredients: [
      "Social Media Strategy Development",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Advertising",
      "Analytics & Reporting",
    ],
    process:
      "We began with a comprehensive audit of their existing social media presence and competitor analysis. Our team developed a content strategy focused on thought leadership and product education, while implementing a consistent posting schedule across LinkedIn, Twitter, and Instagram. We also launched targeted ad campaigns to amplify reach.",
    solution:
      "Created a cohesive brand voice that resonated with their B2B audience, developed educational content series showcasing their expertise, and implemented a community engagement strategy that fostered meaningful conversations with prospects and customers.",
    results: [
      { metric: "Social Media Engagement", value: "+400%", description: "Across all platforms" },
      { metric: "Lead Generation", value: "+250%", description: "From social channels" },
      { metric: "Brand Mentions", value: "+180%", description: "Industry recognition" },
      { metric: "Website Traffic", value: "+320%", description: "From social referrals" },
    ],
  },
  "growthco-marketing": {
    title: "GrowthCo Marketing",
    subtitle: "Strategic Content Overhaul for Marketing Agency",
    image: "/case-study-growthco-hero.png",
    overview: {
      company: "GrowthCo Marketing",
      industry: "Marketing Agency",
      size: "20-50 employees",
      timeline: "8 months",
    },
    challenge:
      "GrowthCo was facing stagnant growth and struggled to differentiate themselves in a crowded marketing agency space. Their content lacked consistency and failed to demonstrate their expertise, resulting in poor lead quality and low conversion rates.",
    ingredients: [
      "Content Marketing Strategy",
      "SEO Optimization",
      "Brand Positioning",
      "Thought Leadership Content",
      "Email Marketing Automation",
    ],
    process:
      "We conducted extensive market research and competitor analysis to identify content gaps and opportunities. Our team developed a comprehensive content calendar focusing on industry insights, case studies, and educational resources while optimizing all content for search engines.",
    solution:
      "Implemented a thought leadership content strategy that positioned GrowthCo as industry experts, created high-value educational resources, and developed a systematic approach to content distribution across multiple channels.",
    results: [
      { metric: "Organic Traffic", value: "+280%", description: "Year-over-year growth" },
      { metric: "Lead Quality Score", value: "+340%", description: "Higher intent prospects" },
      { metric: "Content Engagement", value: "+190%", description: "Across all channels" },
      { metric: "Revenue Growth", value: "+220%", description: "Attributed to content" },
    ],
  },
  "innovate-labs": {
    title: "Innovate Labs",
    subtitle: "Digital Transformation for Research Laboratory",
    image: "/case-study-innovate-hero.png",
    overview: {
      company: "Innovate Labs",
      industry: "Research & Development",
      size: "100-200 employees",
      timeline: "12 months",
    },
    challenge:
      "Innovate Labs had groundbreaking research but struggled to communicate their findings to potential partners and investors. Their digital presence was minimal, and they lacked a strategy to showcase their expertise and attract funding opportunities.",
    ingredients: [
      "Digital Strategy Development",
      "Thought Leadership Content",
      "Website Redesign",
      "Social Media Presence",
      "PR & Media Relations",
    ],
    process:
      "We started with stakeholder interviews to understand their research focus and business goals. Our team developed a comprehensive digital strategy that included website redesign, content creation, and social media presence to establish them as thought leaders in their field.",
    solution:
      "Created a sophisticated digital ecosystem that effectively communicated complex research in accessible formats, established thought leadership through strategic content, and built relationships with key industry stakeholders.",
    results: [
      { metric: "Website Visitors", value: "+450%", description: "Qualified traffic increase" },
      { metric: "Partnership Inquiries", value: "+300%", description: "From potential collaborators" },
      { metric: "Media Mentions", value: "+250%", description: "Industry publications" },
      { metric: "Funding Secured", value: "+$2.5M", description: "New investment rounds" },
    ],
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </div>
  )
}
