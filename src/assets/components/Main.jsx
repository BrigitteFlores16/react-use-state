import React, { useState } from 'react'
import languages from '../data/languages.js';
import '../css/index.css'

export default function Main() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
  
    return (
      <main>
        <aside className="languages-list">
          {languages.map((language) => (
            <button
              key={language.id}
              className={`btn m-2 ${selectedLanguage === language ? 'btn-warning' : 'btn-primary'}`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language.title}
            </button>
          ))}
        </aside>
        {selectedLanguage && (
          <div className="card m-4">
            <div className="card-body">
              <h2 className="card-title">{selectedLanguage.title}</h2>
              <p className="card-text">{selectedLanguage.description}</p>
            </div>
          </div>
        )}
      </main>
    );
  }
  
