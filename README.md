# Soft Phone UI with React, TypeScript & Vite 

Bu layihə, **React, TypeScript və Vite** istifadə edərək qurulmuş, veb əsaslı, funksional bir **soft phone istifadəçi interfeysidir (UI)**. O, istifadəçilərə zəng etmək, zənglərə cavab vermək və əlaqələrə nəzarət etmək kimi əsas telefon funksionallıqlarını təmin edir.

---

## 🌟 Əsas Xüsusiyyətlər (Features)

* **Zəngə başlama:** Zəng etmə simuliyasiyasının qurulmasi.
* **Mikrofonu Səssizləşdirmə (Mute/Unmute):** Zəng zamanı mikrofonu açma/bağlama.
* **Zəngi Bitirmə:** Aktiv zəngi sonlandırma.
* **Zəng Vaxtı Göstəricisi:** Aktiv zəngin müddətini göstərən taymer.
* **Audio Vizualizator:** Səs səviyyəsini göstərən real-time vizualizator.

---

## 🛠️ İstifadə Olunan Texnologiyalar (Technologies Used)

Bu layihə aşağıdakı əsas texnologiyalarla qurulmuşdur:

* **React.js:** İstifadəçi interfeysinin qurulması üçün JavaScript kitabxanası.
* **TypeScript:** Təhlükəsiz və skalyasiya oluna bilən kod yazmaq üçün JavaScript-in typeləşdirilmiş superseti.
* **Vite:** Yüksək sürətli inkişaf serveri və build aləti.
* **WebRTC:** Real-time səs və video rabitə üçün brauzer əsaslı texnologiya (əgər zəng funksionallığı WebRTC ilə təmin edilirsə, əmin olun).
* **`react-sound-visualizer`:** Audio vizualizasiya üçün kitabxana.
* **Layout üçün:** `tailwindCSS`.

---

## 🚀 Sürətli Başlanğıc (Quick Start)

Layihəni qurmaq və işə salmaq üçün aşağıdakı addımları izləyin:

1.  **Repo-nu Klonlayın:**
    ```bash
    git clone https://github.com/xezern/softphone-atl-tech
    cd softphone-atl-tech
    ```

2.  **Asılılıqları Quraşdırın:**
    Layihənin asılılıqlarını yükləmək üçün `npm`, `yarn` və ya `pnpm` istifadə edin:
    ```bash
    npm install
    # və ya
    yarn install
    # və ya
    pnpm install
    ```

3.  **İnkişaf Serverini Başladın:**
    Layihəni inkişaf rejimində işə salın:
    ```bash
    npm run dev
    # və ya
    yarn dev
    # və ya
    pnpm dev
    ```
    Bu əmr layihəni `http://localhost:5555` (və ya Vite-in təyin etdiyi başqa bir portda) işə salacaq.

---

## 🔧 Konfiqurasiya və Skriptlər (Configuration & Scripts)

Layihənin əsas konfiqurasiya faylları və mövcud skriptlər aşağıdadır:

### Mövcud Skriptlər (Available Scripts)

`package.json` faylında təyin edilmiş əsas skriptlər:

* `npm run dev` və ya `npm start`: İnkişaf serverini işə salır.
* `npm run build`: Layihəni istehsal (production) üçün qurur (bundle edir).
* `npm run lint`: ESLint qaydalarına əsasən kodunuzu yoxlayır.
* `npm run preview`: Qurulmuş (build) layihəni lokal olaraq preview edir.

### ESLint Konfiqurasiyasını Genişləndirmək

Kod keyfiyyətini daha da artırmaq üçün `eslint.config.js` faylını aşağıdakı kimi təkmilləşdirə bilərsiniz. Bu, type-aware lint qaydalarını və React-ə xas lint qaydalarını aktivləşdirir:

```javascript
import tseslint from 'typescript-eslint';
import globalIgnores from 'eslint-config-flat-ignore'; // Əgər istifadə edirsinizsə
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']), // 'dist' qovluğunu lint-dən kənarlaşdırır
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // TypeScript üçün tövsiyə olunan type-aware qaydalar
      ...tseslint.configs.recommendedTypeChecked,
      // Əlavə olaraq, daha sərt qaydalar üçün:
      // ...tseslint.configs.strictTypeChecked,
      // Və ya stilistik qaydalar üçün:
      // ...tseslint.configs.stylisticTypeChecked,

      // React-ə xas lint qaydalarını aktivləşdirin
      reactX.configs['recommended-typescript'],
      // React DOM-a xas lint qaydalarını aktivləşdirin
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // digər seçimlər...
    },
  },
]);