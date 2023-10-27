document.addEventListener('DOMContentLoaded', function() {
    var clickToRecord = document.getElementById('click_to_record');
    var stopRecording = document.getElementById('stop_recording');
    var convertText = document.getElementById('convert_text');
    var recognition;

    // Variable para rastrear si la grabación está activa.
    var isRecording = false;

    // Verificar si el navegador admite el reconocimiento de voz.
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();

        // Establecer el idioma en inglés (en-US).
        recognition.lang = 'en-US';

        recognition.continuous = true;

        recognition.interimResults = true;

        recognition.addEventListener('result', function(e) {
            var transcript = Array.from(e.results)
                .map(function(result) {
                    return result[0].transcript;
                })
                .join(' ');

            // Insertar salto de línea cuando el texto exceda un cierto número de caracteres (por ejemplo, 50).
            if (transcript.length >= 50) {
                transcript += '\n';
            }

            convertText.value = transcript;
            console.log(transcript);
        });

        clickToRecord.addEventListener('click', function() {
            if (recognition && !isRecording) {
                recognition.start();
                isRecording = true;
            } else {
                alert('Speech recognition is not available in this browser or recording is already active.');
            }
        });

        stopRecording.addEventListener('click', function() {
            if (recognition && isRecording) {
                recognition.stop();
                isRecording = false;
            }
        });
    } else {
        alert('Speech recognition is not available in this browser.');
    }
});
