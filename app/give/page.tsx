import { Heart, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Give | Graceway AGC Kitale',
  description:
    'Support our mission of lifting up Jesus and sharing the gospel. Find ways to give.',
};

export default function Give() {
  const givingOptions = [
    {
      title: 'Online Giving',
      description: 'Give securely through our online platform',
      icon: Zap,
      link: '#online-giving',
    },
    {
      title: 'In-Person',
      description: 'Give during our weekly services',
      icon: Heart,
      link: '#in-person',
    },
    {
      title: 'Partner With Us',
      description: 'Become a monthly giving partner',
      icon: Users,
      link: '#partnership',
    },
  ];

  const impactAreas = [
    {
      title: 'Community Outreach',
      description:
        'Supporting local initiatives and helping those in need in our community.',
      percentage: 40,
    },
    {
      title: 'Worship & Teaching',
      description:
        'Maintaining our facilities and resources for worship and spiritual growth.',
      percentage: 35,
    },
    {
      title: 'Youth Ministry',
      description:
        'Investing in the next generation through youth programs and mentorship.',
      percentage: 15,
    },
    {
      title: 'Missions & Outreach',
      description:
        'Supporting mission work and church planting in unreached areas.',
      percentage: 10,
    },
  ];

  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-80 bg-sky-600 text-white flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-5xl md:text-6xl font-bold">Generosity Matters</h1>
            <p className="text-xl md:text-2xl mt-4 max-w-2xl">
              Every gift helps us fulfill our mission to lift up Jesus and share
              the gospel.
            </p>
          </div>
        </section>

        {/* Why Give */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Why Give?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Giving is an act of worship and stewardship. When you give to
                  Graceway, you&apos;re investing in ministry that transforms
                  lives and impacts our community for Jesus Christ.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Heart className="w-6 h-6 text-sky-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Partner in Ministry
                      </h3>
                      <p className="text-gray-600">
                        Your gift directly supports our mission and vision.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Heart className="w-6 h-6 text-sky-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Invest in Lives
                      </h3>
                      <p className="text-gray-600">
                        Your generosity helps us reach and serve more people.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Heart className="w-6 h-6 text-sky-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Grow Spiritually
                      </h3>
                      <p className="text-gray-600">
                        Giving deepens your relationship with God.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Your Gift Makes an Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">
                      {'\u20A6'}5,000
                    </span>
                    <span className="text-sm text-gray-600">
                      Provides meals for a family in need for a month
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">
                      {'\u20A6'}10,000
                    </span>
                    <span className="text-sm text-gray-600">
                      Supports youth ministry programs for a quarter
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">
                      {'\u20A6'}50,000
                    </span>
                    <span className="text-sm text-gray-600">
                      Funds community outreach initiatives
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Giving Options */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ways to Give
              </h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                Choose the giving method that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {givingOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Link
                    key={index}
                    href={option.link}
                    className="bg-white rounded-2xl p-8 text-center space-y-4 shadow-md hover:shadow-lg hover:border-sky-300 border border-transparent transition-all duration-300"
                  >
                    <div className="flex justify-center">
                      <div className="bg-sky-100 p-4 rounded-lg">
                        <IconComponent className="w-8 h-8 text-sky-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {option.title}
                    </h3>
                    <p className="text-gray-600">
                      {option.description}
                    </p>
                    <span className="inline-flex items-center text-sky-600 font-semibold">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Where Your Money Goes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Where Your Giving Goes
              </h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                We&apos;re committed to transparency and stewardship of every
                donation.
              </p>
            </div>

            <div className="space-y-6">
              {impactAreas.map((area, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {area.description}
                      </p>
                    </div>
                    <span className="text-sky-600 font-bold ml-4">
                      {area.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-sky-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${area.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-sky-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Your generosity impacts lives and advances God&apos;s Kingdom.
              Thank you for considering Graceway AGC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#online-giving"
                className="inline-flex items-center justify-center bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Give Online
              </Link>
              <Link
                href="/connect"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}
