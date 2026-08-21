# Ανέβασμα στο GitHub και Vercel

Προτείνω ΝΕΟ καθαρό repository: `car-doctor-ai-pro`.

1. Κατέβασε και αποσυμπίεσε το ZIP.
2. GitHub → New repository → όνομα `car-doctor-ai-pro`.
3. Add file → Upload files.
4. Ανέβασε ΟΛΑ τα αρχεία/φακέλους που είναι ΜΕΣΑ στο αποσυμπιεσμένο project. Όχι το ZIP σαν ένα αρχείο.
5. Commit changes.
6. Vercel → Add New → Project → Import `car-doctor-ai-pro`.
7. Κάνε Deploy. Η βάση DTC δουλεύει αμέσως.
8. Για πραγματική AI διάγνωση, πρόσθεσε στη Vercel Environment Variables: `OPENAI_API_KEY` και `OPENAI_MODEL=gpt-5.6-luna`.
9. Για μόνιμο ιστορικό διαγνώσεων, πρόσθεσε αργότερα `DATABASE_URL` από Neon/Postgres.
