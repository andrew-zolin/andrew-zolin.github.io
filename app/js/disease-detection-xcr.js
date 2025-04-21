 // Disease data
 const diseaseData = {
    "nodule": {
        title: "Nodule",
        description: "SOF INSIGHT CXR enables AI-powered detection of lung nodules with high accuracy, helping radiologists identify potential early signs of lung cancer.",
        image: "assets/images/insight-cxr/Nodule.jpg",
        accuracy: "97%",
        highlightPosition: { x: 70, y: 68 }
    },
    "consolidation": {
        title: "Consolidation",
        description: "SOF AI accurately detects areas of consolidation in the lungs, which can indicate pneumonia or other inflammatory conditions.",
        image: "assets/images/insight-cxr/Consolidation2.jpg",
        accuracy: "96%",
        highlightPosition: { x: 60, y: 50 }
    },
    "pneumothorax": {
        title: "Pneumothorax",
        description: "Our AI system can quickly identify pneumothorax (collapsed lung), a potentially life-threatening condition requiring immediate medical attention.",
        image: "assets/images/insight-cxr/Pneumothorax.jpg",
        accuracy: "98%",
        highlightPosition: { x: 30, y: 40 }
    },
    "pleural-effusion": {
        title: "Pleural Effusion",
        description: "SOF INSIGHT CXR detects pleural effusion, the abnormal accumulation of fluid in the pleural space between the lungs and chest wall.",
        image: "assets/images/insight-cxr/Pleural-Effusion.jpg",
        accuracy: "97%",
        highlightPosition: { x: 80, y: 55 }
    },
    "atelectasis": {
        title: "Atelectasis",
        description: "Our AI accurately identifies atelectasis, the complete or partial collapse of a lung or lobe of a lung, which can be caused by various conditions.",
        image: "assets/images/insight-cxr/Atelectasis.jpg",
        accuracy: "95%",
        highlightPosition: { x: 65, y: 45 }
    },
    "pneumoperitoneum": {
        title: "Pneumoperitoneum",
        description: "SOF AI can detect pneumoperitoneum, the presence of air or gas in the abdominal cavity, which is often a sign of a perforated organ.",
        image: "assets/images/insight-cxr/Pneumoperitoneum1.jpg",
        accuracy: "96%",
        highlightPosition: { x: 50, y: 70 }
    },
    "cardiomegaly": {
        title: "Cardiomegaly",
        description: "Our system accurately identifies cardiomegaly (enlarged heart), which can be a sign of various heart conditions or diseases.",
        image: "assets/images/insight-cxr/Cardiomegaly.jpg",
        accuracy: "98%",
        highlightPosition: { x: 50, y: 50 }
    },
    "mediastinal-widening": {
        title: "Mediastinal Widening",
        description: "SOF INSIGHT CXR detects mediastinal widening, which can indicate serious conditions such as aortic aneurysm or lymphadenopathy.",
        image: "assets/images/insight-cxr/Mediastinal-Widening1.jpg",
        accuracy: "94%",
        highlightPosition: { x: 50, y: 40 }
    },
    "calcification": {
        title: "Calcification",
        description: "Our AI system identifies calcifications in the lungs, which can be indicative of prior infections, granulomatous diseases, or other conditions.",
        image: "assets/images/insight-cxr/Calcification.jpg",
        accuracy: "95%",
        highlightPosition: { x: 40, y: 55 }
    },
    "fibrosis": {
        title: "Fibrosis",
        description: "SOF AI accurately detects pulmonary fibrosis, the scarring of lung tissue that can lead to serious breathing problems.",
        image: "assets/images/insight-cxr/Fibrosis.jpg",
        accuracy: "93%",
        highlightPosition: { x: 60, y: 60 }
    },
    "tuberculosis": {
        title: "Tuberculosis",
        description: "SOF INSIGHT CXR provides support for tuberculosis screening programs, helping to identify potential TB cases for further evaluation.",
        image: "assets/images/insight-cxr/Tuberculosis.jpg",
        accuracy: "96%",
        highlightPosition: { x: 55, y: 45 }
    }
};

// Function to update the disease display
function updateDiseaseDisplay(disease) {
    const data = diseaseData[disease];
    
    // Update image with fallback
    document.getElementById('xray-image').src = data.image;
    
    // Update text content
    document.getElementById('disease-title').textContent = data.title;
    document.getElementById('disease-description').textContent = data.description;
    
    // Update accuracy
    const accuracyValue = document.querySelector('.accuracy-value');
    accuracyValue.style.width = data.accuracy;
    accuracyValue.textContent = data.accuracy;
    
    // Update active button
    document.querySelectorAll('.disease-button').forEach(button => {
        button.classList.remove('active');
        button.querySelector('.check-icon')?.remove();
    });
    
    const activeButton = document.querySelector(`.disease-button[data-disease="${disease}"]`);
    activeButton.classList.add('active');
    
    // Add check icon to active button
    if (!activeButton.querySelector('.check-icon')) {
        const checkIcon = document.createElement('span');
        checkIcon.className = 'check-icon';
        checkIcon.innerHTML = '<i class="bi bi-check"></i>';
        activeButton.prepend(checkIcon);
    }
    
    // Update detection highlight
    const detectionOverlay = document.getElementById('detection-overlay');
    detectionOverlay.innerHTML = '';
    
    // const highlight = document.createElement('div');
    // highlight.className = 'detection-highlight';
    // highlight.style.left = `${data.highlightPosition.x}%`;
    // highlight.style.top = `${data.highlightPosition.y}%`;
    // detectionOverlay.appendChild(highlight);
}

// Add event listeners to disease buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.disease-button').forEach(button => {
        button.addEventListener('click', function() {
            const disease = this.getAttribute('data-disease');
            updateDiseaseDisplay(disease);
        });
    });
});