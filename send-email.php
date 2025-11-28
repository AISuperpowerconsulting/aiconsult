<?php
// Email configuration
$to = 'adrian@aiconsult.ch';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: AIConsult.ch Website <noreply@aiconsult.ch>\r\n";
$headers .= "Reply-To: " . $_POST['email'] . "\r\n";

// Set response headers
header('Content-Type: application/json');

// Validate required fields
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['formType'])) {
    echo json_encode(['success' => false, 'message' => 'Erforderliche Felder fehlen']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(trim($_POST['name']));
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$formType = htmlspecialchars(trim($_POST['formType']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Ungültige E-Mail-Adresse']);
    exit;
}

// Determine form type and build email
switch ($formType) {
    case 'workshop-beginner':
        $subject = 'Neue Anfrage: KI Einsteiger Workshop';
        $participants = htmlspecialchars(trim($_POST['participants']));
        $format = htmlspecialchars(trim($_POST['format']));
        $timeframe = htmlspecialchars(trim($_POST['timeframe']));
        $message = htmlspecialchars(trim($_POST['message']));

        $emailBody = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                h2 { color: #37e6ff; }
                .info-row { margin: 10px 0; }
                .label { font-weight: bold; color: #555; }
            </style>
        </head>
        <body>
            <h2>Neue Anfrage: KI Einsteiger Workshop</h2>
            <div class='info-row'><span class='label'>Name:</span> {$name}</div>
            <div class='info-row'><span class='label'>E-Mail:</span> <a href='mailto:{$email}'>{$email}</a></div>
            <div class='info-row'><span class='label'>Anzahl Teilnehmende:</span> {$participants}</div>
            <div class='info-row'><span class='label'>Format:</span> {$format}</div>
            <div class='info-row'><span class='label'>Gewünschter Zeitraum:</span> {$timeframe}</div>
            <div class='info-row'><span class='label'>Nachricht:</span><br>{$message}</div>
        </body>
        </html>
        ";
        break;

    case 'training-day':
        $subject = 'Neue Anfrage: KI Team Training Tag';
        $participants = htmlspecialchars(trim($_POST['participants']));
        $format = htmlspecialchars(trim($_POST['format']));
        $departments = isset($_POST['departments']) ? $_POST['departments'] : [];
        $departmentsText = implode(', ', array_map('htmlspecialchars', $departments));
        $challenges = htmlspecialchars(trim($_POST['challenges']));
        $timeframe = htmlspecialchars(trim($_POST['timeframe']));

        $emailBody = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                h2 { color: #37e6ff; }
                .info-row { margin: 10px 0; }
                .label { font-weight: bold; color: #555; }
            </style>
        </head>
        <body>
            <h2>Neue Anfrage: KI Team Training Tag</h2>
            <div class='info-row'><span class='label'>Name:</span> {$name}</div>
            <div class='info-row'><span class='label'>E-Mail:</span> <a href='mailto:{$email}'>{$email}</a></div>
            <div class='info-row'><span class='label'>Anzahl Teilnehmende:</span> {$participants}</div>
            <div class='info-row'><span class='label'>Format:</span> {$format}</div>
            <div class='info-row'><span class='label'>Beteiligte Bereiche:</span> {$departmentsText}</div>
            <div class='info-row'><span class='label'>Grösste Herausforderungen:</span><br>{$challenges}</div>
            <div class='info-row'><span class='label'>Gewünschter Zeitraum:</span> {$timeframe}</div>
        </body>
        </html>
        ";
        break;

    case 'consulting':
        $subject = 'Neue Anfrage: Individuelle KI Beratung';
        $phone = htmlspecialchars(trim($_POST['phone']));
        $role = htmlspecialchars(trim($_POST['role']));
        $topics = isset($_POST['topics']) ? $_POST['topics'] : [];
        $topicsText = implode(', ', array_map('htmlspecialchars', $topics));
        $goals = htmlspecialchars(trim($_POST['goals']));
        $timeframe = htmlspecialchars(trim($_POST['timeframe']));

        $emailBody = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                h2 { color: #37e6ff; }
                .info-row { margin: 10px 0; }
                .label { font-weight: bold; color: #555; }
            </style>
        </head>
        <body>
            <h2>Neue Anfrage: Individuelle KI Beratung</h2>
            <div class='info-row'><span class='label'>Name:</span> {$name}</div>
            <div class='info-row'><span class='label'>E-Mail:</span> <a href='mailto:{$email}'>{$email}</a></div>
            <div class='info-row'><span class='label'>Telefon:</span> {$phone}</div>
            <div class='info-row'><span class='label'>Funktion:</span> {$role}</div>
            <div class='info-row'><span class='label'>Themen:</span> {$topicsText}</div>
            <div class='info-row'><span class='label'>Konkrete Ziele:</span><br>{$goals}</div>
            <div class='info-row'><span class='label'>Gewünschter Zeitraum:</span> {$timeframe}</div>
        </body>
        </html>
        ";
        break;

    default:
        echo json_encode(['success' => false, 'message' => 'Ungültiger Formulartyp']);
        exit;
}

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'E-Mail erfolgreich gesendet']);
} else {
    echo json_encode(['success' => false, 'message' => 'E-Mail konnte nicht gesendet werden']);
}
?>
