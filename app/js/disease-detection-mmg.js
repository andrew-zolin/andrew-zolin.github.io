// Disease data
const diseaseData = {
    "normal-benign": {
        title: "Normal / Benign mass ",
        description: "SOF INSIGHT CXR enables AI-powered detection of lung nodules with high accuracy, helping radiologists identify potential early signs of lung cancer.",
        image: "assets/images/insight-mmg/Normal.png",
        accuracy: "97%",
        // highlightPosition: { x: 0, y: 0 }
    },
    "mucinous-carcinoma": {
        title: "Malignant mass ",
        description: "SOF AI accurately detects areas of consolidation in the lungs, which can indicate pneumonia or other inflammatory conditions.",
        image: "assets/images/insight-mmg/Mucinous-carcinoma.png",
        accuracy: "96%",
        highlightPosition: { x: 52, y: 70 }
    },
};

// Function to update the disease display
function updateDiseaseDisplay(disease) {
    const data = diseaseData[disease];
    
    // Update image with fallback
    document.getElementById('xray-image').src = data.image;
    
    // Update text content
    // document.getElementById('disease-title').textContent = data.title;
    // document.getElementById('disease-description').textContent = data.description;
    
    // Update accuracy
    // const accuracyValue = document.querySelector('.accuracy-value');
    // accuracyValue.style.width = data.accuracy;
    // accuracyValue.textContent = data.accuracy;
    
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
    
    // if (data.highlightPosition) {
    //     const highlight = document.createElement('div');
    //     highlight.className = 'detection-highlight';
    //     highlight.style.left = `${data.highlightPosition.x}%`;
    //     highlight.style.top = `${data.highlightPosition.y}%`;
    //     detectionOverlay.appendChild(highlight);
    // }
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