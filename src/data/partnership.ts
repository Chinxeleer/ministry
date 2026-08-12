/**
 * Partnership details — the editable "props" from the design's DC script,
 * lifted into one place so the contact info lives in a single file.
 */

export const contactEmail = 'blessingeleer@gmail.com';

/**
 * WhatsApp needs the international form (country code, no plus, no leading 0).
 * The design carried the local number 065 849 4978 → 27 65 849 4978.
 */
export const whatsappNumber = '27658494978';

/** Which tier gets the "Most chosen" badge. */
export const highlightTier = 'R500';

export const tiers = ['R350', 'R500', 'R1000'].map((amount) => ({
  amount,
  badge: amount === highlightTier ? 'Most chosen' : '',
}));

const partnerMessage = "Hi Blessing, I'd like to become a monthly ministry partner.";

export const ctaHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(partnerMessage)}`
  : `mailto:${contactEmail}?subject=${encodeURIComponent('Monthly ministry partnership')}`;

export const bookHref = `mailto:${contactEmail}?subject=${encodeURIComponent('Coffee chat about campus partnership')}`;

export const mailtoHref = `mailto:${contactEmail}`;
