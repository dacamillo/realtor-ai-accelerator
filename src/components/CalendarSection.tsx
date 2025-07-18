export function CalendarSection() {
  return (
    <section id="calendar-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions? <span className="text-primary">Let's Talk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a free strategy call to discuss your specific needs and see how our AI suite can transform your real estate business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-soft p-8">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/x6cSMbDK8KgMVmMJMN3I" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', height: '600px' }} 
            scrolling="no" 
            id="msgsndr-calendar"
          />
          <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
        </div>
      </div>
    </section>
  );
}