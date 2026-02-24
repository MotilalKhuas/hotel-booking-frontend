import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
    className,
    ...props
}) {
    return (
        <RadioGroupPrimitive.Root
            data-slot="radio-group"
            className={cn("grid gap-3", className)}
            {...props} />
    );
}

function RadioGroupItem({
    className,
    CustomNode,
    ...props
}) {
    return (
        <RadioGroupPrimitive.Item
            data-slot="radio-group-item"
            className={cn(

                className
            )}
            {...props}
        >
            {
                CustomNode ?
                    <CustomNode /> :
                    <RadioGroupPrimitive.Indicator
                        data-slot="radio-group-indicator"
                        className="relative flex items-center justify-center">
                        <CircleIcon
                            className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
                    </RadioGroupPrimitive.Indicator>
            }
        </RadioGroupPrimitive.Item>
    );
}

export { RadioGroup, RadioGroupItem }
