const services = {
  web: {
    title: 'Web Development',
    text: 'We build modern, responsive websites and web applications that help businesses convert visitors into customers and grow their digital footprint.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Custom website development',
      'E-commerce and CMS solutions',
      'Performance and security optimization',
    ],
  },
  app: {
    title: 'App Development',
    text: 'Our team creates powerful mobile apps for iOS and Android, designed to engage users and deliver a seamless digital experience.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Native and cross-platform apps',
      'User-centered mobile design',
      'App store deployment support',
    ],
  },
  hosting: {
    title: 'Hosting & Infrastructure',
    text: 'Reliable hosting keeps your website and applications online, fast and secure. We manage infrastructure so you can focus on your business.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Managed cloud hosting',
      'Monitoring and uptime support',
      'Backup and security management',
    ],
  },
  maintenance: {
    title: 'Website Maintenance',
    text: 'Keep your digital presence up to date with continual maintenance, updates, and performance improvements.',
    image: 'https://images.pexels.com/photos/3184390/pexels-photo-3184390.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Routine updates and patches',
      'Content and performance tuning',
      'Security monitoring and fixes',
    ],
  },
  design: {
    title: 'UI/UX Design',
    text: 'We create intuitive digital experiences with thoughtful user interface and experience design that improves conversion and engagement.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'User research and prototyping',
      'Visual design systems',
      'Interaction and usability design',
    ],
  },
};

const serviceButtons = document.querySelectorAll('.service-item');
const serviceDetail = document.getElementById('service-detail');

function updateService(serviceKey) {
  const service = services[serviceKey];
  if (!service) return;

  serviceButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.service === serviceKey);
  });

  const detailHtml = `
    <div class="service-image" style="background-image: url('${service.image}');"></div>
    <div class="service-copy">
      <h3>${service.title}</h3>
      <p>${service.text}</p>
      <ul>
        ${service.bullets.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <a class="btn btn-secondary" href="#contact">Learn More</a>
    </div>
  `;

  serviceDetail.innerHTML = detailHtml;
}

serviceButtons.forEach((button) => {
  button.addEventListener('click', () => updateService(button.dataset.service));
});

updateService('web');
