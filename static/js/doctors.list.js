
// Ниже реализован функционал по поведению чекбоксов, соответвтенно по нему должен фильтроватьсья список врачей, тэги которых соответствуют выбранным

document.addEventListener("DOMContentLoaded", () => {
  function setupGroup(groupSelector, allId) {
    const group = document.querySelector(groupSelector);
    if (!group) return;

    const allCheckbox = group.querySelector(`#${allId}`);
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');

    // функция для сброса в состояние "Все ..."
    function resetGroup() {
      checkboxes.forEach(cb => {
        cb.checked = cb.id === allId;
      });
    }

    // по умолчанию "Все ..." выбрано
    resetGroup();

    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        if (cb.id === allId) {
          // Если нажали на "Все ..." → снять выбор со всех остальных
          checkboxes.forEach(other => {
            if (other !== allCheckbox) other.checked = false;
          });
          allCheckbox.checked = true;
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

    return { resetGroup };
  }

  // Запуск для двух групп
  const depGroup = setupGroup(".filter-tags-dep", "d1");
  const specGroup = setupGroup(".filter-tags-specs", "s1");

  // Кнопка "Сбросить фильтры"
  const resetBtn = document.querySelector(".reset-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      depGroup?.resetGroup();
      specGroup?.resetGroup();
      // Здесь можно добавить обновление списка врачей, если нужно
    });
  }
});
