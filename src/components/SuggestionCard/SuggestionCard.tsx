import React from 'react';
import { LocationIcon, HotelIcon, SadSmileIcon } from '../../utils/icons';

interface SuggestionProps {
  placeSuggestions: any;
  inputValue: string;
  lodgignSuggestions: any;
}

const openNewTab = (suggestion: any) => {
  const newTab = window.open('/details?' + suggestion.place_id, '_blank');
  newTab?.focus();
};

const SuggestionCard: React.FC<SuggestionProps> = ({ placeSuggestions, inputValue, lodgignSuggestions }) => {
  return (
    <div className="suggestions">
      {placeSuggestions.length ? <div key={"Location"} className="suggestionHeader">Locations</div> :
        inputValue.length ? <div key={"noLocation"} className="suggestionHeader"><SadSmileIcon />No matching locations found</div> : <></>}

      {placeSuggestions.map((suggestion: any, index: number) => (
        <div key={index} className="suggestion" onClick={() => openNewTab(suggestion)}>
          <LocationIcon />{" " + suggestion.structured_formatting.main_text + " "}<small className="smaller">{suggestion.structured_formatting.secondary_text}</small>
        </div>
      ))}
      {lodgignSuggestions.length ? <div key={"Hotel"} className="suggestionHeader">Hotels</div> :
        inputValue.length ? <div key={"noHotel"} className="suggestionHeader"><SadSmileIcon />No matching hotels found</div> : <></>}

      {lodgignSuggestions.map((suggestion: any, index: any) => (
        <div key={index} className="suggestion" onClick={() => openNewTab(suggestion)}>
          <HotelIcon />{" " + suggestion.structured_formatting.main_text + " "}<small className="smaller">{(suggestion.terms[0] as any).value}</small>
        </div>
      ))}
    </div>
  );
};
export default SuggestionCard;