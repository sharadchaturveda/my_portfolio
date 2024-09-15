
        // Custom cursor
        const cursor = document.querySelector("#cursor");
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Parallax effect on skills
        const skills = document.querySelectorAll('.skill');
        document.addEventListener('mousemove', parallax);

        function parallax(e) {
            skills.forEach(skill => {
                const speed = 5;
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                skill.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }

// 3D text effect for showcase
const showcaseText = document.querySelector('.glitch-text');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const rotateX = (y - windowHeight / 2) / 20;
    const rotateY = (x - windowWidth / 2) / -20;
    
    showcaseText.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Glitch effect on hover for projects
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.classList.add('glitch-effect');
        setTimeout(() => {
            project.classList.remove('glitch-effect');
        }, 1000);
    });
});

// Neon trail effect
const trailCanvas = document.createElement('canvas');
document.body.appendChild(trailCanvas);
trailCanvas.width = window.innerWidth;
trailCanvas.height = window.innerHeight;
trailCanvas.style.position = 'fixed';
trailCanvas.style.top = '0';
trailCanvas.style.left = '0';
trailCanvas.style.pointerEvents = 'none';
trailCanvas.style.zIndex = '9998';

const ctx = trailCanvas.getContext('2d');
let trail = [];

document.addEventListener('mousemove', (e) => {
    trail.push({x: e.clientX, y: e.clientY});
    if (trail.length > 20) trail.shift();
});

function drawTrail() {
    ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
    for (let i = 0; i < trail.length; i++) {
        const point = trail[i];
        ctx.beginPath();
        ctx.arc(point.x, point.y, i / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${1 - i / trail.length})`;
        ctx.fill();
    }
    requestAnimationFrame(drawTrail);
}
drawTrail();

// Interactive skill bubbles
const skillBubbles = document.querySelectorAll('.skill');
skillBubbles.forEach(bubble => {
    bubble.addEventListener('mouseover', () => {
        gsap.to(bubble, {scale: 1.2, duration: 0.3, ease: "power2.out"});
    });
    bubble.addEventListener('mouseout', () => {
        gsap.to(bubble, {scale: 1, duration: 0.3, ease: "power2.out"});
    });
});

// Typewriter effect for tagline
const tagline = document.querySelector('#showcase p');
const taglineText = tagline.textContent;
tagline.textContent = '';
let i = 0;
function typeWriter() {
    if (i < taglineText.length) {
        tagline.textContent += taglineText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Scramble text effect for project titles
function scrambleText(element) {
    const originalText = element.textContent;
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iterations = 0;
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return possibleChars[Math.floor(Math.random() * possibleChars.length)];
            })
            .join('');
        
        if (iterations >= originalText.length) clearInterval(interval);
        iterations += 1 / 3;
    }, 30);
}

const projectTitles = document.querySelectorAll('.project h3');
projectTitles.forEach(title => {
    title.addEventListener('mouseover', () => scrambleText(title));
});

const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                gsap.to(icon, {scale: 1.2, duration: 0.3, ease: "power2.out"});
            });
            icon.addEventListener('mouseout', () => {
                gsap.to(icon, {scale: 1, duration: 0.3, ease: "power2.out"});
            });
        });
