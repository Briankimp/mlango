import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function BlogPraiseOverSacrifice() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      {/* Navigation */}
      <div className="border-b border-border/50">
        <div className="container py-4">
          <Button variant="ghost" className="gap-2" onClick={() => setLocation("/")}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Blog Post */}
      <article className="container max-w-3xl py-16 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-xs font-semibold text-primary">
            Faith & Worship
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">The Power of Praise Over Sacrifice</h1>
          <p className="text-xl text-muted-foreground">Exploring what it truly means to worship God with a sincere heart, beyond rituals and traditions.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
            <span>By Steve Mulango</span>
            <span>•</span>
            <span>November 25, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Throughout history, religious traditions have emphasized the importance of sacrifice as a means of showing devotion to God. From ancient temple offerings to modern-day rituals, sacrifice has been seen as the ultimate expression of faith and commitment. However, the Bible presents a different perspective that challenges our understanding of what true worship really means.
          </p>

          <h2 className="text-3xl font-bold mt-8">Understanding the Heart of Worship</h2>
          <p className="text-lg leading-relaxed">
            In the Old Testament, we see God repeatedly expressing His preference for the heart of the worshipper over the external acts of sacrifice. The Psalmist writes, "You do not delight in sacrifice, or I would bring it; you do not take pleasure in burnt offerings" (Psalm 51:16). This powerful statement reveals that God's primary concern is not with the outward display of devotion, but with the condition of our hearts.
          </p>

          <p className="text-lg leading-relaxed">
            Jesus reinforced this principle when He said, "If you had known what these words mean, 'I desire mercy, not sacrifice,' you would not have condemned the innocent" (Matthew 12:7). This quote from Hosea 6:6 emphasizes that God values compassion, justice, and genuine love far more than ceremonial offerings.
          </p>

          <h2 className="text-3xl font-bold mt-8">The Transformation of Worship</h2>
          <p className="text-lg leading-relaxed">
            When we shift our focus from external rituals to internal transformation, worship becomes a lifestyle rather than a performance. True praise is not about what we do in a church building on Sunday morning; it's about how we live our lives Monday through Saturday. It's about treating others with kindness, standing up for justice, and living out our faith in practical ways.
          </p>

          <p className="text-lg leading-relaxed">
            This doesn't mean that corporate worship, prayer, and spiritual disciplines are unimportant. Rather, it means that these practices should flow from a sincere heart and lead to genuine transformation in how we interact with others and navigate the world.
          </p>

          <h2 className="text-3xl font-bold mt-8">Living a Life of Praise</h2>
          <p className="text-lg leading-relaxed">
            When we understand that praise is more important than sacrifice, we begin to see worship as something that permeates every aspect of our existence. Our work becomes worship. Our relationships become worship. Our acts of service become worship. This holistic understanding of praise transforms us from people who are trying to appease God through external actions to people who are genuinely seeking to align our hearts and lives with His will.
          </p>

          <p className="text-lg leading-relaxed">
            As you go through your week, I encourage you to reflect on what true worship means in your life. Are you focused on external displays of piety, or are you cultivating a sincere heart that seeks to honor God through genuine love, compassion, and justice? The power of praise lies not in what we sacrifice, but in who we become when we truly open our hearts to God's transforming love.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <Button size="lg" onClick={() => setLocation("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </article>
    </div>
  );
}
