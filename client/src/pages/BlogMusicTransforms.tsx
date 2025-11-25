import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function BlogMusicTransforms() {
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
            Music & Ministry
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">How Music Transforms Lives</h1>
          <p className="text-xl text-muted-foreground">Sharing my journey as a worship leader and how music has been a powerful tool for ministry.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
            <span>By Steve Mulango</span>
            <span>•</span>
            <span>November 25, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Music has always been a universal language that transcends cultural boundaries and speaks directly to the human soul. Throughout my journey as a musician and worship leader, I have witnessed firsthand how music possesses the remarkable power to transform lives, heal broken hearts, and draw people closer to their faith. This is not just my personal belief, but a truth I have seen manifested countless times in the lives of those around me.
          </p>

          <h2 className="text-3xl font-bold mt-8">The Healing Power of Melody</h2>
          <p className="text-lg leading-relaxed">
            There is something profoundly therapeutic about music. When words fail us, melody speaks. When we are overwhelmed with emotion, rhythm grounds us. I have seen individuals who were struggling with depression find solace in a worship song. I have witnessed people at their lowest moments experience a breakthrough through the power of music and worship.
          </p>

          <p className="text-lg leading-relaxed">
            Music has the unique ability to bypass our intellectual defenses and speak directly to our emotional and spiritual core. It can comfort the grieving, inspire the hopeless, and unite communities in shared purpose and celebration. This is why music has been central to spiritual practices across cultures and religions for millennia.
          </p>

          <h2 className="text-3xl font-bold mt-8">Music as a Ministry Tool</h2>
          <p className="text-lg leading-relaxed">
            As a worship leader, I have come to understand that music is not merely entertainment or artistic expression. It is a sacred tool for ministry and spiritual transformation. When we lead people in worship through music, we are creating a space where the divine can meet the human, where healing can occur, and where communities can be built.
          </p>

          <p className="text-lg leading-relaxed">
            Every song we sing, every melody we share, carries the potential to change someone's life. I have received countless testimonies from people who have told me that a particular worship song ministered to them during a difficult season, or that music helped them encounter God in a new and transformative way.
          </p>

          <h2 className="text-3xl font-bold mt-8">Building Community Through Song</h2>
          <p className="text-lg leading-relaxed">
            One of the most beautiful aspects of music is its ability to unite people. When we sing together, we create a shared experience that transcends our individual differences. We become part of something larger than ourselves. This communal aspect of music is essential for building strong, supportive communities.
          </p>

          <p className="text-lg leading-relaxed">
            In a world that often feels divided and fragmented, music has the power to bring people together. Whether it's in a church setting, a concert hall, or a community gathering, music creates a space where people can connect with one another and with something greater than themselves.
          </p>

          <h2 className="text-3xl font-bold mt-8">My Invitation to You</h2>
          <p className="text-lg leading-relaxed">
            If you have never experienced the transformative power of music in your own life, I encourage you to open yourself to it. Whether you are a musician or simply someone who enjoys listening to music, allow yourself to be moved by melody and rhythm. Seek out music that speaks to your soul, that challenges you, that comforts you, and that connects you to something greater.
          </p>

          <p className="text-lg leading-relaxed">
            Music has the power to transform not just individual lives, but entire communities and cultures. As we continue to create, share, and celebrate music, we are participating in something sacred and transformative. This is why I am so passionate about music ministry, and why I continue to dedicate my life to using music as a tool for healing, inspiration, and spiritual growth.
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
