
// Ниже реализован функционал по поведению чекбоксов, соответвтенно по нему должен фильтроватьсья список врачей, тэги которых соответствуют выбранным

document.addEventListener("DOMContentLoaded", () => {
  function setupGroup(groupSelector, allId) {
    const group = document.querySelector(groupSelector);
    if (!group) return;

    const allCheckbox = group.querySelector(`#${allId}`);
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');

    allCheckbox.checked = true;

    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        if (cb.id === allId) {
          // Если нажали на "Все ..." → снять выбор со всех остальных
          checkboxes.forEach(other => {
            if (other !== allCheckbox) other.checked = false;
          });
          allCheckbox.checked = true; // защита от снятия
        } else {
          // Если выбрали что-то другое → снять "Все ..."
          allCheckbox.checked = false;
        }

        // Если вообще ничего не выбрано → включить "Все ..."
        const anyChecked = Array.from(checkboxes).some(
          c => c.checked && c.id !== allId
        );
        if (!anyChecked) {
          allCheckbox.checked = true;
        }
      });
    });
  }

  // Запуск для двух групп
  setupGroup(".filter-tags-specs", "s1");
  setupGroup(".filter-tags-dep", "d1");
});
