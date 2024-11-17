export function renderCategorySkeleton(containerList,count = 7) {

    for (let i = 0; i < count; i++) {
        const category = document.createElement('categories__item');
        category.classList.add('categories-skeleton');
        containerList.append(category)
    }
    return containerList

}

export function renderCategoryControlSkeleton(containerControl) {

    const containerCategory = document.createElement("div")
    containerCategory.classList.add("control-skeleton")
    containerControl.append(containerCategory)
    return containerControl

}