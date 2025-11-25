import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, SOCIAL_LINKS } from "@/const";
import { Instagram, Music, Youtube, Facebook, ArrowRight, Play, Sparkles, Heart } from "lucide-react";
import { SiTiktok, SiSpotify } from "react-icons/si";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all"></div>
              <img src={APP_LOGO} alt="Steve Mulango" className="relative w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all" />
            </div>
            <span className="font-semibold text-lg group-hover:text-primary transition-colors">Mlash Mlango</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-sm font-medium hover:text-primary transition-all hover:scale-105">About</a>
            <a href="#content" onClick={(e) => scrollToSection(e, '#content')} className="text-sm font-medium hover:text-primary transition-all hover:scale-105">Content</a>
            <a href="#blog" onClick={(e) => scrollToSection(e, '#blog')} className="text-sm font-medium hover:text-primary transition-all hover:scale-105">Blog</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-sm font-medium hover:text-primary transition-all hover:scale-105">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110 transform">
              <Youtube className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110 transform">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-bounce-slow">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Digital Creator & Musician</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                Steve
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Mulango
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Artist • Musician • Songwriter • Teacher
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Creating faith-based content and sharing worship music from Nairobi, Kenya. 
                Join me on a journey of praise, inspiration, and acoustic performances.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 group hover:shadow-lg hover:shadow-primary/25 transition-all" asChild>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch on YouTube
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 group hover:bg-primary hover:text-primary-foreground transition-all">
                  <a href="#content" onClick={(e) => scrollToSection(e, '#content')} className="flex items-center gap-2">
                    <Music className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Explore Content
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center animate-fade-in delay-200">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20"></div>
                <img 
                  src={APP_LOGO} 
                  alt="Steve Mulango" 
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-background group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/50 backdrop-blur-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a digital creator and musician based in Nairobi, Kenya, passionate about sharing faith-based content through music and teaching. 
                    My journey includes studying at Gulf Coast College and Seminary, Overcomers Mission Schools, Thika Technical Training Institute, and Kangaru School.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">My Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through my YouTube channel "Mlash Mlango," I share worship covers, original songs, and inspirational messages. 
                    My content focuses on praise, worship, and helping others grow in their faith through music and teaching.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Content Section */}
      <section id="content" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        
        <div className="container relative z-10 space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Featured Content</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground">Watch my latest videos and performances</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 - Feel It by Tobby Mac */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.youtube.com/embed/W5ZFUhyOXBI"
                  title="Feel It by Tobby Mac"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Feel It by Tobby Mac</h3>
                <p className="text-sm text-muted-foreground mb-4">Acoustic performance</p>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.youtube.com/watch?v=W5ZFUhyOXBI" target="_blank" rel="noopener noreferrer">
                    Watch Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Video 2 - A.S.K | Revelations of Truth */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.youtube.com/embed/kZ92DpyeCxI"
                  title="A.S.K | Mlash Mlango Revelations of Truth"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">A.S.K | Revelations of Truth</h3>
                <p className="text-sm text-muted-foreground mb-4">Teaching Series</p>
                <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                  <a href="https://www.youtube.com/watch?v=kZ92DpyeCxI" target="_blank" rel="noopener noreferrer">
                    Watch Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Video 3 - House of Miracles */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.youtube.com/embed/jMJ0iUFv6Ko"
                  title="House of Miracles by Brandon Lake (cover)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">House of Miracles (Cover)</h3>
                <p className="text-sm text-muted-foreground mb-4">Brandon Lake Cover</p>
                <Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                  <a href="https://www.youtube.com/watch?v=jMJ0iUFv6Ko" target="_blank" rel="noopener noreferrer">
                    Watch Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TikTok Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>
        
        <div className="container relative z-10 space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Follow on TikTok</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground">Short-form content and behind-the-scenes moments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TikTok Embed 1 */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.tiktok.com/embed/7549108523003628806"
                  title="TikTok Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Music & Worship</h3>
                <p className="text-sm text-muted-foreground mb-4">Short music clips and worship moments</p>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.tiktok.com/@mlashmlango2024/video/7549108523003628806" target="_blank" rel="noopener noreferrer">
                    View on TikTok
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* TikTok Embed 2 */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.tiktok.com/embed/7366730980238970118"
                  title="TikTok Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Daily Life</h3>
                <p className="text-sm text-muted-foreground mb-4">Personal moments and daily updates</p>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.tiktok.com/@mlashmlango2024/video/7366730980238970118" target="_blank" rel="noopener noreferrer">
                    View on TikTok
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* TikTok Embed 3 */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.tiktok.com/embed/7382483541440892165"
                  title="TikTok Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Inspirational Content</h3>
                <p className="text-sm text-muted-foreground mb-4">Motivational and faith-based videos</p>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.tiktok.com/@mlashmlango2024/video/7382483541440892165" target="_blank" rel="noopener noreferrer">
                    View on TikTok
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="gap-2 group" asChild>
              <a href="https://www.tiktok.com/@mlashmlango2024" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Follow on TikTok
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Facebook Section */}
      {/* <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div> */}
        
        {/* <div className="container relative z-10 space-y-12"> */}
          {/* <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Follow on Facebook</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground">Connect and engage with our community</p>
          </div> */}

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            {/* Facebook Embed 1 */}
            {/* <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1QDhf14mVJ%2F&show_text=false&width=500"
                  title="Facebook Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Community Updates</h3>
                <p className="text-sm text-muted-foreground mb-4">Latest updates and announcements</p>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.facebook.com/share/r/1QDhf14mVJ/" target="_blank" rel="noopener noreferrer">
                    View on Facebook
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card> */}

            {/* Facebook Embed 2 */}
            {/* <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1ZpQoRTjd1%2F&show_text=false&width=500"
                  title="Facebook Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Live Sessions</h3>
                <p className="text-sm text-muted-foreground mb-4">Live teaching and worship sessions</p>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.facebook.com/share/r/1ZpQoRTjd1/" target="_blank" rel="noopener noreferrer">
                    View on Facebook
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card> */}

            {/* Facebook Embed 3 */}
            {/* <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F17RbbzuaqU%2F&show_text=false&width=500"
                  title="Facebook Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Testimonies</h3>
                <p className="text-sm text-muted-foreground mb-4">Stories and testimonies from our community</p>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.facebook.com/share/r/17RbbzuaqU/" target="_blank" rel="noopener noreferrer">
                    View on Facebook
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card> */}
          {/* </div> */}

          {/* <div className="text-center">
            <Button size="lg" className="gap-2 group" asChild>
              <a href="https://www.facebook.com/share/1DTm7mLy71/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Follow on Facebook
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div> */}
        {/* </div> */}
      {/* </section> */}

      {/* Spotify Section */}
      <section className="py-24 bg-card/50 backdrop-blur-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                  <SiSpotify className="relative w-20 h-20  group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold">Listen on Spotify</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground">
                Stream my music and worship covers on Spotify
              </p>
            </div>
            <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl">
              <CardContent className="p-12">
                <p className="text-muted-foreground mb-6 text-lg">Coming soon to Spotify and other streaming platforms</p>
                <Button size="lg" variant="outline" className="gap-2 group hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <SiSpotify className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Follow on Spotify
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        
        <div className="container relative z-10 space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold">Blog & Insights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground">Thoughts on faith, music, and life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-xs font-semibold text-primary">
                  Faith & Worship
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">The Power of Praise Over Sacrifice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exploring what it truly means to worship God with a sincere heart, beyond rituals and traditions.
                </p>
                <Button variant="ghost" className="px-0 group/btn hover:text-primary" asChild>
                  <a href="/blog/praise-over-sacrifice">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-xs font-semibold text-primary">
                  Music & Ministry
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">How Music Transforms Lives</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sharing my journey as a worship leader and how music has been a powerful tool for ministry.
                </p>
                <Button variant="ghost" className="px-0 group/btn hover:text-primary" asChild>
                  <a href="/blog/music-transforms-lives">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-xs font-semibold text-primary">
                  Teaching & Growth
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Building Faith Through Teaching</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reflections on my experience as a teacher and how education shapes spiritual growth.
                </p>
                <Button variant="ghost" className="px-0 group/btn hover:text-primary" asChild>
                  <a href="/blog/faith-through-teaching">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold">Connect With Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground">
                Follow my journey across social media platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 bg-card hover:bg-primary/10 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/50"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                  <Youtube className="relative w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-center">
                  <div className="text-base font-bold mb-1">YouTube</div>
                  <div className="text-xs text-muted-foreground">134 subscribers</div>
                </div>
              </a>

              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 bg-card hover:bg-primary/10 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/50"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                  <SiTiktok className="relative w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-center">
                  <div className="text-base font-bold mb-1">TikTok</div>
                  <div className="text-xs text-muted-foreground">1.4K followers</div>
                </div>
              </a>

              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 bg-card hover:bg-primary/10 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/50"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                  <Instagram className="relative w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-center">
                  <div className="text-base font-bold mb-1">Instagram</div>
                  <div className="text-xs text-muted-foreground">@stevemulango</div>
                </div>
              </a>

              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 bg-card hover:bg-primary/10 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/50"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                  <Facebook className="relative w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-center">
                  <div className="text-base font-bold mb-1">Facebook</div>
                  <div className="text-xs text-muted-foreground">5.3K followers</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24 bg-card/50 backdrop-blur-sm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold">Let's Connect</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Interested in collaboration, bookings, or just want to say hello? Reach out through any of my social media platforms.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 group hover:shadow-lg hover:shadow-primary/25 transition-all" asChild>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Subscribe on YouTube
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" asChild>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Follow on Instagram
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                <img src={APP_LOGO} alt="Steve Mulango" className="relative w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">© 2025 Steve Mulango. All rights reserved.</span>
                <span className="text-xs text-muted-foreground/70">Made by <a href="https://brianmunene.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-blue-500">Brian</a></span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform">
                <SiTiktok className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
