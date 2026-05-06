const services = {
  damage: {
    title: 'Storm Damage Assessment',
    text: 'We evaluate roof damage from storms, wind, and hail, then deliver a repair plan that restores strength and safety.',
    image: 'https://images.pexels.com/photos/2697463/pexels-photo-2697463.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Emergency damage inspection',
      'Detailed repair recommendations',
      'Insurance documentation support',
    ],
  },
  asphalt: {
    title: 'Asphalt Shingle Roofing',
    text: 'Asphalt shingles remain a popular choice for their affordability and reliability. We offer expert installation and repair backed by quality materials.',
    image: 'https://images.pexels.com/photos/5668487/pexels-photo-5668487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Gutter installation and maintenance',
      'Skylight installation and repair',
      'Chimney flashing and repair',
    ],
  },
  metal: {
    title: 'Metal Roofing Services',
    text: 'Metal roofing delivers long-term durability and protection. Our team installs and repairs metal roof systems with precision.',
    image: 'https://images.pexels.com/photos/6153783/pexels-photo-6153783.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Custom metal roof installation',
      'Rust prevention and coating',
      'Leak repair and maintenance',
    ],
  },
  green: {
    title: 'Green Roof Installation',
    text: 'Green roofing solutions improve insulation and aesthetics while contributing to a more sustainable home environment.',
    image: 'https://images.pexels.com/photos/10960910/pexels-photo-10960910.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Eco-friendly plant roof systems',
      'Drainage and waterproofing solutions',
      'Long-term maintenance plans',
    ],
  },
  ventilation: {
    title: 'Roof Ventilation Services',
    text: 'Proper ventilation extends roof life and prevents moisture buildup. We design balanced ventilation systems for every roof type.',
    image: 'https://images.pexels.com/photos/5875044/pexels-photo-5875044.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bullets: [
      'Attic ventilation assessment',
      'Soffit and ridge vent installation',
      'Heat and moisture control',
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

updateService('asphalt');
