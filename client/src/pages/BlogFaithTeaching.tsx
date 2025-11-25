import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function BlogFaithTeaching() {
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
            Teaching & Growth
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Building Faith Through Teaching</h1>
          <p className="text-xl text-muted-foreground">Reflections on my experience as a teacher and how education shapes spiritual growth.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
            <span>By Steve Mulango</span>
            <span>•</span>
            <span>November 25, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Throughout my career as an educator and spiritual leader, I have come to understand that teaching is far more than the transmission of information. It is a sacred responsibility to shape minds, inspire hearts, and guide individuals toward their highest potential. When teaching is infused with faith and purpose, it becomes a transformative force that extends far beyond the classroom.
          </p>

          <h2 className="text-3xl font-bold mt-8">The Role of Education in Spiritual Development</h2>
          <p className="text-lg leading-relaxed">
            Education and faith are deeply interconnected. When we teach with integrity, compassion, and purpose, we are not just imparting knowledge—we are modeling what it means to live a life of faith and conviction. Students learn as much from how we teach as they do from what we teach. They observe our character, our values, and our commitment to truth.
          </p>

          <p className="text-lg leading-relaxed">
            As an educator, I have always believed that my primary responsibility is to help students develop critical thinking skills, a love of learning, and most importantly, a strong moral and spiritual foundation. Education that ignores the spiritual dimension of human existence is incomplete. It may produce knowledgeable individuals, but it will not produce wise ones.
          </p>

          <h2 className="text-3xl font-bold mt-8">Teaching as an Act of Love</h2>
          <p className="text-lg leading-relaxed">
            The most effective teaching comes from a place of genuine love and concern for the well-being of students. When students know that their teacher truly cares about them—not just their academic performance, but their holistic development as human beings—they are more open to learning and growth.
          </p>

          <p className="text-lg leading-relaxed">
            This is why I have always tried to create classroom environments where students feel safe, valued, and encouraged to ask questions, express doubts, and explore their faith. Teaching is an opportunity to help young people navigate the complexities of life with wisdom, compassion, and faith as their guides.
          </p>

          <h2 className="text-3xl font-bold mt-8">The Power of Example</h2>
          <p className="text-lg leading-relaxed">
            One of the most important lessons I have learned as a teacher is that example is the most powerful teaching tool. Students will remember how we made them feel, how we treated them, and how we lived our values far more than they will remember the specific content we taught them.
          </p>

          <p className="text-lg leading-relaxed">
            When we live with integrity, when we admit our mistakes and learn from them, when we treat others with kindness and respect, we are teaching lessons that no textbook can convey. We are demonstrating what it means to live a life of faith in practical, tangible ways.
          </p>

          <h2 className="text-3xl font-bold mt-8">Building Faith in the Next Generation</h2>
          <p className="text-lg leading-relaxed">
            As educators and spiritual leaders, we have a responsibility to help build faith in the next generation. This is not about indoctrination or forcing beliefs, but about creating space for young people to explore their own faith, ask difficult questions, and develop a personal relationship with God that is authentic and meaningful.
          </p>

          <p className="text-lg leading-relaxed">
            This requires patience, humility, and a willingness to walk alongside students as they navigate their spiritual journeys. It means being honest about our own doubts and struggles, so that students understand that faith is not about having all the answers, but about trusting in God even when we don't understand everything.
          </p>

          <h2 className="text-3xl font-bold mt-8">A Call to Educators and Spiritual Leaders</h2>
          <p className="text-lg leading-relaxed">
            To all educators and spiritual leaders reading this, I want to encourage you to see your role as sacred. You have the power to shape the future through the lives you touch and the values you instill. Do not underestimate the impact you have on your students. Continue to teach with passion, integrity, and faith. Continue to invest in the lives of young people, knowing that you are building the foundation for their spiritual growth and development.
          </p>

          <p className="text-lg leading-relaxed">
            Education that builds faith is education that transforms not just individuals, but entire communities and societies. As we continue to teach with purpose and conviction, we are participating in God's work of redemption and transformation in the world.
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
