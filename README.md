# Abhishek Gupta - Personal Portfolio

A cinematic, futuristic, and fully responsive personal portfolio built with a premium Cyberpunk/TRON-inspired aesthetic. This project showcases my experience, skills, and projects as a Software Engineering Intern and CS student.

## Technologies Used
- React.js (Vite)
- Tailwind CSS
- Framer Motion (Animations)
- Lucide React (Icons)
- TypeScript

---

## 🏗️ Flowcharts

### 1. Website Architecture Flowchart

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#0f0f0f', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#ff6b00', 'lineColor': '#ff6b00', 'secondaryColor': '#ff8c42', 'tertiaryColor': '#171717'}}}%%
graph TD
    A[Home] --> B[Hero Section]
    B --> C[About Me]
    C --> D[Skills Stack]
    D --> E[Experience]
    E --> F[Projects Showcase]
    F --> G[Certifications]
    G --> H[Resume Download]
    H --> I[Contact Section]
    I --> J[Footer]

    classDef neon fill:#0f0f0f,stroke:#ff6b00,stroke-width:2px,color:#fff,shadow:0 0 10px #ff6b00;
    class A,B,C,D,E,F,G,H,I,J neon;
```

### 2. Developer Architecture Flowchart

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#050505', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#ff6b00', 'lineColor': '#ff6b00'}}}%%
graph TD
    A[Frontend: React + Tailwind CSS] --> B(Component Layer)
    B --> C{Layout & UI Components}
    B --> D{Interactive Widgets}
    
    A --> E(Animations Layer)
    E --> F[Framer Motion Hooks]
    E --> G[CSS Neon Utilities]
    
    A --> H(Data & Logic Layer)
    H --> I[Static Content Maps]
    H --> J[Form State Management]
    
    A --> K(Deployment Layer)
    K --> L[Vite Build Pipeline]
    L --> M[Production Build]

    classDef tech fill:#171717,stroke:#ff8c42,stroke-width:2px,color:#fff;
    class A,B,C,D,E,F,G,H,I,J,K,L,M tech;
```

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. To build for production: `npm run build`
