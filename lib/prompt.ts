export function generatePrompt(userPrompt: string): string {
  return `
    Description: ${userPrompt}

    Based on the above description, generate a form in **strict JSON format** using the following schema:

    Each form must follow this structure:
    - "title": string (form's main heading)
    - "subheading": string (short supporting text)
    - "fields": array of field objects

    Each field object must include:
    - "name": string (unique, camelCase)
    - "type": one of: "text", "email", "tel", "url", "select", "textarea", "number", "password", "checkbox", "radio", "date", "file", "range", "color", "datetime-local", "month", "week"
    - "label": string (field label)
    - "placeholder": string (placeholder text, can be empty "")
    - "required": boolean
    - "options" (optional): if type is "select", "radio", or similar – include an array of:
      - "value": string
      - "label": string

    Important notes:
    - Output only the final valid JSON object.
    - Do not include markdown, explanations, or any non-JSON characters.
    - Ensure the output is directly usable with JSON.parse() and matches this structure.
  `;
}
