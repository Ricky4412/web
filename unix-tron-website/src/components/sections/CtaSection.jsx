import Button from '../common/Button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-unix-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today to discuss how Unixtron Africa can help your business grow
        </p>
        <Button
          variant="primary"
          size="medium"
          onClick={() => console.log('CTA clicked')}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;